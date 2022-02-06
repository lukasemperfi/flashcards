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

	const onCloseNewCard = () => {
		setIsCreateCardOpen(false)
	}

	return (
		<>
			<div className={classes.btnBack}>
				<Button
					type="text"
					icon={<ArrowLeftOutlined />}
					onClick={onCloseNewCard}
				>
					Назад
				</Button>
			</div>
			<div className='containerCard'>
				<TestEditor
					newCard={newCard}
					setNewCard={setNewCard}
				/>
				<div className={classes.newCardBtns}>
					<Button
						className={classes.cancelBtn}
						onClick={onCloseNewCard}
					>Отменить
					</Button>
					<Button
						className={classes.saveBtn}
						onClick={addCardToKit}
					>
						Сохранить
					</Button>
				</div>
			</div >
		</>
	);
};
