import React, { useState } from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react'
import parse from 'html-react-parser';

import classes from './TestEditor.module.css'


const editorConfiguration = {
	// toolbar: ['bold', 'italic']
	removePlugins: ['Markdown'],
	placeholder: 'Введите ответ',
	title: {
		placeholder: 'Введите вопрос'
	},
};


const testData = JSON.parse(localStorage.getItem("test"));

// console.log(testData);

export const TestEditor = () => {
	const [text, setText] = useState('')


	const [isEdit, setIsEdit] = useState(false)

const editToogle = () => {
	setIsEdit( prev => !prev)
}

	return (
		<>
			<button onClick={editToogle}>Редактировать</button>
			{isEdit
				?
				<div >
					<CKEditor
						editor={Editor}
						config={editorConfiguration}
						// data={testData}
						// onReady={editor => {
						// 	// You can store the "editor" and use when it is needed.
						// 	console.log('Editor is ready to use!', editor);
						// 	editor.setData(testData);
						// }}
						onChange={(event, editor) => {
							const data = editor.getData();
							setText(data)
							// window.localStorage.setItem('test', JSON.stringify(data));
							console.log({ data });
							// console.log(editor.plugins.get('Title').getBody()); 

						}}
					// onBlur={(event, editor) => {
					// 	console.log('Blur.', editor);
					// }}
					// onFocus={(event, editor) => {
					// 	console.log('Focus.', editor);
					// }}
					/>
				</div>
				:
				<div className={classes.card}>
					<div className={classes.cardHeader}>
						<div className={classes.cardTop}></div>
						<div className={classes.cardTitle}>
							Введите вопрос
						</div>
					</div>
					<div className={classes.cardBody}>
						Введите ответ
					</div>
				</div>
			}
		</>
	);
};
