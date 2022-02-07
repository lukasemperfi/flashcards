import React, { useState } from 'react';
import { Input, Space, PageHeader, Button, Anchor, Collapse, Typography } from 'antd';
import classes from './CardIdPage.module.css'
import { CheckOutlined, CloseOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { TestEditor } from '../../components/TestEditor';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCardById } from '../../store/selectors';
import parse from 'html-react-parser';



export const CardIdPage = () => {
	const { cardSetId, cardId } = useParams()
	const card = useSelector(state => selectCardById(state, cardSetId, cardId))

	const [newCard, setNewCard] = useState({ title: '', body: '' })
	const [isEditOpen, setIsEditOpen] = useState(false)

	const editorData = card.question + card.answer

	console.log(editorData);

	const onEditClick = () => {
		setIsEditOpen(prev => !prev)
	}

	const updateCard = () => {
		if (newCard.title && newCard.body) {

		}
		// dispatch(addCard({ kitId: cardSetId, card }))
		// setIsCreateCardOpen(false)
	}
	const onChangeEditor = (event, editor) => {
		const data = editor.getData()
		const title = editor.plugins.get('Title').getTitle()
		const body = editor.plugins.get('Title').getBody()
		console.log(Array.from( editor.ui.componentFactory.names() ));

		// setNewCard({ title, body })

		// window.localStorage.setItem('test', JSON.stringify(data));
		// console.log(editor.plugins.get('Title').getBody()); 

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
					<div className={classes.cardBtnEdit}>
						<Button type='primary'
							// disabled={isEditOpen} 
							onClick={onEditClick}>Редактировать</Button>
					</div>

					{isEditOpen
						?
						<TestEditor
							data={editorData}
							onChange={onChangeEditor}
						/>

						:
						(
							<>
								<div className={classes.cardPanel}></div>
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
