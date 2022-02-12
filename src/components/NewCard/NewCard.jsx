import React, { useState } from 'react';
import { Button } from 'antd';
import classes from './NewCard.module.css'
import { ArrowLeftOutlined } from '@ant-design/icons';
import { TestEditor } from '../../components/TestEditor';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/cardSetsSlice';
import { nanoid } from '@reduxjs/toolkit';

export const NewCard = ({ cardSetId, setIsCreateCardOpen }) => {
	const [newCard, setNewCard] = useState({ title: '', body: '' })

	const dispatch = useDispatch()

	const addCardToKit = () => {
		if (newCard.title && newCard.body) {
			const card = {
				id: nanoid(),
				question: newCard.title,
				answer: newCard.body,
				statistics: {
					repeat: 0,
					correct: 0,
					notCorrect: 0,
				}
			}
			dispatch(addCard({ kitId: cardSetId, card }))
			setIsCreateCardOpen(false)
		}

	}

	const closeNewCard = () => {
		setIsCreateCardOpen(false)
	}

	const onChangeEditor = (event, editor) => {
		const data = editor.getData()
		const title = editor.plugins.get('Title').getTitle()
		const body = editor.plugins.get('Title').getBody()

		setNewCard({ title, body })

		// window.localStorage.setItem('test', JSON.stringify(data));
		console.log(title + body);

	}

	return (
		<>
			<div className={classes.btnBack}>
				<Button
					type="text"
					icon={<ArrowLeftOutlined />}
					onClick={closeNewCard}
				>
					Назад
				</Button>
			</div>
			<div className='containerCard'>
				<TestEditor
					onChange={onChangeEditor}
					onCloseClick={closeNewCard}
					onSaveClick={addCardToKit}
				/>
			</div >
		</>
	);
};
