import React from 'react';
import classes from './CardEditor.module.css'

import { Button } from 'antd';

import Editor from 'ckeditor5-custom-build/build/ckeditor'; 
import { CKEditor } from '@ckeditor/ckeditor5-react'

const editorConfiguration = {
	placeholder: 'Введите ответ',
	title: {
		placeholder: 'Введите вопрос'
	},
};


export const CardEditor = ({ data = '', onChange, onCloseClick, onSaveClick }) => {

	return (
		<>
			<div >
				<div className='editor-custom'>
					<CKEditor
						editor={Editor}
						config={editorConfiguration}
						data={data}
						onReady={editor => editor.focus()}
						onChange={onChange}
					/>
				</div>
				<div className={classes.editorBtns}>
					<Button
						className={classes.cancelBtn}
						onClick={onCloseClick}
					>Отменить
					</Button>
					<Button
						className={classes.saveBtn}
						onClick={onSaveClick}
					>
						Сохранить
					</Button>
				</div>
			</div>
		</>
	);
};
