import React, {useRef, useEffect} from 'react';
import classes from './ModalForm.module.css'
import { Button, Input } from 'antd';
import cn from 'classnames'

export const ModalForm = (props) => {
	const {
		visible,
		canselClick,
		confirmClick,
		cancelText,
		confirmText,
		width,
		inputOnChange, 
		inputValue
	} = props
	const inputRef = useRef(null)

useEffect(() => {
	if(visible) {
	setTimeout(() => inputRef.current.focus(), 100);
	}
}, [visible])

	return (
		<div className={cn(classes.wrapper, {
			[classes.active]: visible,
		})}>
			<form className={classes.modalForm} onSubmit={confirmClick}>
				<Input placeholder='Введите название' value={inputValue} onChange={inputOnChange} ref={inputRef} />
				<div className={classes.modalFormBtns}>
					<Button  className={classes.canselBtn} onClick={canselClick}>{cancelText}</Button>
					<Button htmlType='submit' className={classes.confirmBtn}>{confirmText}</Button>
				</div>
			</form>
			<div className={classes.modalFormBack} onClick={canselClick} />
		</div>
	);
};
