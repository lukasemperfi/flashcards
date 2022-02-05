import React, { useState } from 'react';
import classes from './CardsSetAdd.module.css'
import cn from 'classnames'
import { ModalForm } from '../UI/ModalForm/ModalForm';
import { CollapsedButton } from '../UI/CollapsedButton/CollapsedButton';
import { useDispatch } from 'react-redux';
import { addCardSet } from '../../store/cardSetsSlice';

export const CardsSetAdd = ({ showBtn }) => {
	const [modalForm, setModalForm] = useState(false)
	const [title, setTitle] = useState('')
	const dispatch = useDispatch()

	const showModalForm = () => {
		setModalForm(prev => !prev)
	}

	const canselClick = () => {
		setModalForm(false)
		setTitle('')
	}

	const addCardKit = (event) => {
		event.preventDefault()
		if (title !== '') {
			dispatch(addCardSet({ title }))
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
				confirmClick={addCardKit}
				cancelText='Отменить'
				confirmText='Создать'
				inputValue={title}
				inputOnChange={inputOnChange}
			/>
		</div>
	);
};
