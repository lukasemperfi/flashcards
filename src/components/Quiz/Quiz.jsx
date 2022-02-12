import React, { useState, useEffect } from 'react';
import classes from './Quiz.module.css';
import {Button, Space, Modal } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { QuizCard } from '../QuizCard/QuizCard';
import { QuizResult } from '../QuizResult/QuizResult';
import { useDispatch } from 'react-redux';
import { updateCardStatistics } from '../../store/cardSetsSlice';



export const Quiz = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const dispatch = useDispatch()
	const { cards, pathFrom, kitId } = location.state
	const [cardNumber, setCardNumber] = useState(0)
	const [visible, setVisible] = useState(false)
	const [result, setResult] = useState({ correct: 0, notCorrect: 0 })

	console.log(location.state)



	const onCorrectNotCorrectBtnsClick = (event, cardId) => {
		const name = event.currentTarget.name

		if (cardNumber < cards.length) {
			if (name === 'correct') { 
				setResult({ ...result, correct: result.correct + 1 })
				dispatch(updateCardStatistics({kitId, cardId, resultName: name })) 
			}
			if (name === 'notCorrect') { 
				setResult({ ...result, notCorrect: result.notCorrect + 1 })
				dispatch(updateCardStatistics({kitId, cardId, resultName: name }))  
			}
		}
		if ((cardNumber + 1) < cards.length) { setCardNumber(prevCard => prevCard + 1) }
		else { setVisible(true) }
	}

	const onModalCancelClick = () => {
		navigate(pathFrom)
	}

	const onModalAgainClick = () => {
		setCardNumber(0)
		setResult({ correct: 0, notCorrect: 0 })
		setVisible(false)
	}

	const modalFooter = (
		<div className={classes.modalBtns}>
			<Space size='middle'>
				<Button type="ghost" className={classes.modalCancelBtn} onClick={onModalCancelClick}>Выйти</Button>
				<Button type="primary" className={classes.modalAgainBtn} onClick={onModalAgainClick}>Повторить еще раз</Button>
			</Space>
		</div>)

	return (
		<section className={classes.quiz}>
			<div className={classes.container}>
				<QuizCard
					card={cards[cardNumber]}
					onCorrectNotCorrectBtnsClick={onCorrectNotCorrectBtnsClick}
				/>
			</div>
			<Modal
				width={300}
				visible={visible}
				maskClosable={false}
				onCancel={onModalCancelClick}
				footer={modalFooter}
			>
				<QuizResult result={result} />
			</Modal>
		</section>
	);
};
