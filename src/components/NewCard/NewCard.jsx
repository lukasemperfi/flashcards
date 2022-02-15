import React, { useState } from 'react';
import classes from './NewCard.module.css'

import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { useDispatch } from 'react-redux';
import { addCard } from '../../store/cardSetsSlice';
import { nanoid } from '@reduxjs/toolkit';

import { CardEditor } from '../CardEditor/CardEditor';


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
		const title = editor.plugins.get('Title').getTitle()
		const body = editor.plugins.get('Title').getBody()
		setNewCard({ title, body })
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
				<CardEditor
					onChange={onChangeEditor}
					onCloseClick={closeNewCard}
					onSaveClick={addCardToKit}
				/>
			</div >
		</>
	);
};
