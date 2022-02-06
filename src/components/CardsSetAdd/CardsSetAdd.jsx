import React, { useState } from 'react';
import classes from './CardsSetAdd.module.css'
import cn from 'classnames'
import { ModalForm } from '../UI/ModalForm/ModalForm';
import { CollapsedButton } from '../UI/CollapsedButton/CollapsedButton';


export const CardsSetAdd = ({ showBtn, addCardsSet }) => {
	const [modalForm, setModalForm] = useState(false)
	const [title, setTitle] = useState('')


	const showModalForm = () => {
		setModalForm(prev => !prev)
	}

	const canselClick = () => {
		setModalForm(false)
		setTitle('')
	}

	const confirmClick = (event) => {
		event.preventDefault()
		if (title !== '') {
			addCardsSet(title)
			setModalForm(false)
			setTitle('')
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
				canselClick={canselClick}
				confirmClick={confirmClick}
				cancelText='Отменить'
				confirmText='Создать'
				inputValue={title}
				inputOnChange={inputOnChange}
			/>
		</div>
	);
};
