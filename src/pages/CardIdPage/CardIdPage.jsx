import React, { useLayoutEffect, useState, useEffect } from 'react';
import { Input, Space, PageHeader, Button, Anchor, Collapse, Typography } from 'antd';
import classes from './CardIdPage.module.css'
import { CheckOutlined, CloseOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { TestEditor } from '../../components/TestEditor';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectCardById } from '../../store/selectors';
import parse from 'html-react-parser';
import { updateCard } from '../../store/cardSetsSlice';



import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);




export const CardIdPage = () => {
	const { cardSetId, cardId } = useParams()
	const card = useSelector(state => selectCardById(state, cardSetId, cardId))

	const [newCard, setNewCard] = useState({ title: '', body: '' })
	const [isEditOpen, setIsEditOpen] = useState(false)

	const editorData = card.question + card.answer
	const dispatch = useDispatch()
	// console.log(editorData);

	useEffect(() => {
		hljs.highlightAll()
	}, [isEditOpen])

	const onEditClick = () => {
		setIsEditOpen(prev => !prev)
	}

	const upgradeCard = () => {
		if (newCard.title && newCard.body) {
		dispatch(updateCard({ kitId: cardSetId, cardId, question: parse(newCard.title), answer: newCard.body }))
		setIsEditOpen(false)
		}

	}
	const onChangeEditor = (event, editor) => {
		const data = editor.getData()
		const title = editor.plugins.get('Title').getTitle()
		const body = editor.plugins.get('Title').getBody()

		setNewCard({ title, body })

		// window.localStorage.setItem('test', JSON.stringify(data));
		console.log(title + body);

	}



	return (
		<section className={classes.quiz}>
			<div className={classes.container}>
				<div className={classes.btnBack}>
					<Link to={`/${cardSetId}`}>
						<ArrowLeftOutlined />
						<span className={classes.btnBackText}>Назад</span>
					</Link>
				</div>
				<div className={classes.card}>
					{!isEditOpen && (<div className={classes.cardBtnEdit}>
						<Button type='primary'
							// disabled={isEditOpen} 
							onClick={onEditClick}>Редактировать</Button>
					</div>)
					}

					{isEditOpen
						?
						<TestEditor
							data={editorData}
							onChange={onChangeEditor}
							onCloseClick={onEditClick}
							onSaveClick={upgradeCard}
						/>

						:
						(
							<>
								<div className={classes.cardContent}>
									<div className={classes.cardHeader}>
										<div className={classes.cardTitle}>
											<h1>{parse(card.question)}</h1>
										</div>
									</div>
									<div className={classes.cardBody}>
										{parse(card.answer)}
									</div> 
								</div>
							</>

						)
					}
				</div>
			</div>
		</section>



		// <>
		// 	<div className={classes.btnBack}>
		// 		<Button type="text" href='#' icon={<ArrowLeftOutlined />}>
		// 			Назад
		// 		</Button>
		// 	</div>
		// 	<div className='containerCard'>
		// 		<div className={classes.btnEdit}>
		// 			<Button type='primary'>Редактировать</Button>
		// 		</div>
		// 		<TestEditor />
		// 	</div >
		// </>

	);
};
