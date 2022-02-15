import React, { useState, useEffect } from 'react';
import classes from './CardIdPage.module.css'

import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import { CardEditor } from '../../components/CardEditor/CardEditor';
import { Card } from '../../components/Card/Card';

import { useParams, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectCardById } from '../../store/selectors';
import { updateCard } from '../../store/cardSetsSlice';

import parse from 'html-react-parser';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);


export const CardIdPage = () => {
	const { cardSetId, cardId } = useParams()
	const dispatch = useDispatch()
	const card = useSelector(state => selectCardById(state, cardSetId, cardId))

	const [newCard, setNewCard] = useState({ title: '', body: '' })
	const [isEditOpen, setIsEditOpen] = useState(false)

	const editorData = card.question + card.answer


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
		const title = editor.plugins.get('Title').getTitle()
		const body = editor.plugins.get('Title').getBody()

		setNewCard({ title, body })

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
					{!isEditOpen && (<div className={classes.btnEdit}>
						<Button type='primary'
							onClick={onEditClick}>Редактировать</Button>
					</div>)
					}

					{isEditOpen
						?
						<CardEditor
							data={editorData}
							onChange={onChangeEditor}
							onCloseClick={onEditClick}
							onSaveClick={upgradeCard}
						/>
						:
						<Card card={card} />
					}
				</div>
			</div>
		</section>
	);
};
