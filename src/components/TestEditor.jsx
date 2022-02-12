import React, { useState } from 'react';
import { Input, Space, PageHeader, Button, Anchor, Collapse, Typography } from 'antd';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'

import classes from './TestEditor.module.css'


const editorConfiguration = {
	// toolbar: ['bold', 'italic']
	placeholder: 'Введите ответ',
	title: {
		placeholder: 'Введите вопрос'
	},
};


const testData = JSON.parse(localStorage.getItem("test"));


export const TestEditor = ({data = '', onChange, onCloseClick, onSaveClick }) => {

	return (
		<>
			<div >
			<div className='editor-custom'>
				<CKEditor
					editor={Editor}
					config={editorConfiguration}
					data={data}
					onReady={editor => {
						// You can store the "editor" and use when it is needed.
						// console.log('Editor is ready to use!', editor);
						// editor.setData(testData);
						editor.focus()
					}}
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
