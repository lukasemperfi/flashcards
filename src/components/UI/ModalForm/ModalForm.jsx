import React, { useRef, useEffect } from 'react';
import classes from './ModalForm.module.css'
import cn from 'classnames'

import { Button, Input } from 'antd';


export const ModalForm = (props) => {
	const {
		visible,
		width,
		canсelClick,
		confirmClick,
		cancelText,
		confirmText,
		inputOnChange,
		inputValue,
		position,
	} = props
	const inputRef = useRef(null)
	const {top, right} = position || {}


	useEffect(() => {
		if (visible) {
			setTimeout(() => inputRef.current.focus(), 100);
		}
	}, [visible])

	return (
		<div style={{minWidth: width || '', right: right || '', top: top || ''}} className={cn(classes.wrapper, {
			[classes.active]: visible,
		})}>
			<form style={{width: width || ''}} className={classes.modalForm} onSubmit={confirmClick}>
				<Input
					placeholder='Введите название'
					value={inputValue}
					onChange={inputOnChange}
					ref={inputRef}
				/>
				<div className={classes.modalFormBtns}>
					<Button
						className={classes.canselBtn}
						onClick={(canсelClick)}
					>
						{cancelText}
					</Button>
					<Button
						htmlType='submit'
						className={classes.confirmBtn}
					>
						{confirmText}
					</Button>
				</div>
			</form>
			<div className={classes.modalFormBack} onClick={canсelClick} />
		</div>
	);
};
