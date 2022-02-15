import React, { useEffect, useState } from 'react';

import classes from './CardsSetAdd.module.css'
import { ModalForm } from '../UI/ModalForm/ModalForm';

import { useSelector } from 'react-redux'
import { selectLastCardsSetId } from '../../store/selectors'

import { useNavigate } from 'react-router-dom';


export const CardsSetAdd = ({ showBtn, addCardsSet }) => {
	const navigate = useNavigate()

	const [modalForm, setModalForm] = useState(false)
	const [title, setTitle] = useState('')
	const [isAdded, setIsAdded] = useState(false)

	const lastCardsSetId = useSelector(selectLastCardsSetId)


	useEffect(() => {
		if(isAdded) {
			navigate(`/${lastCardsSetId}`)
			setIsAdded(false)
		}
	}, [isAdded])

	const showModalForm = () => {
		setModalForm(prev => !prev)
	}


	const cancelClick = () => {
		setModalForm(false)
		setTitle('')
	}

	const confirmClick = (event) => {
		event.preventDefault()
		if (title !== '') {
			addCardsSet(title)
			setModalForm(false)
			setTitle('')
			setIsAdded(true)
		}

	}

	const inputOnChange = (event) => {
		setTitle(event.target.value)
	}

	return (
		<div className={classes.wrapper}>
			<div onClick={showModalForm}>
				{showBtn}
			</div>
			<ModalForm
				visible={modalForm}
				setVisible={setModalForm}
				canсelClick={cancelClick}
				confirmClick={confirmClick}
				cancelText='Отменить'
				confirmText='Создать'
				inputValue={title}
				inputOnChange={inputOnChange}
			/>
		</div>
	);
};
