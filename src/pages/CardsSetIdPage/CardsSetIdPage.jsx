import React, { useState } from 'react';
import classes from './CardsSetIdPage.module.css'

import { Layout, Menu, Button, Dropdown, message } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

import { CardsSetTable } from '../../components/CardsSetTable/CardsSetTable';
import { CardsSetStatistic } from '../../components/CardsSetStatistic/CardsSetStatistic';
import { NewCard } from '../../components/NewCard/NewCard';
import { NotFound } from '../NotFound/NotFound';

import { useFirstCardsSetIdAfterDelete } from './useCardsSetId';
import { getCardsDoneNumber } from '../../utils/tableHelpers';

import { useNavigate, useParams, useLocation } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { selectCardSetById, selectIsCardsSetExist } from '../../store/selectors';
import { deleteSet, renameSet } from '../../store/cardSetsSlice';
import { useEffect } from 'react';
import { ModalForm } from '../../components/UI/ModalForm/ModalForm';

const { Header, Content } = Layout;



export const CardsSetIdPage = () => {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { cardSetId } = useParams()

	const dispatch = useDispatch()
	const isCardsSetExist = useSelector((state) => selectIsCardsSetExist(state, cardSetId))
	const { title = '', cards = [] } = useSelector(state => selectCardSetById(state, cardSetId)) || {}

	const [isCreateCardOpen, setIsCreateCardOpen] = useState(false)
	const [isModalFormVisible, setIsModalFormVisible] = useState(false)
	const [newTitle, setNewTitle] = useState(title)

	const firstCardsSetIdAfterDelete = useFirstCardsSetIdAfterDelete(cardSetId)

	useEffect(() => {
		if (isCreateCardOpen) {
			setIsCreateCardOpen(false)
		}
	}, [cardSetId])

	const onStartQuizClick = () => {
		navigate('/quiz',
			{
				state:
				{
					pathFrom: pathname,
					cards,
					kitId: cardSetId
				}
			})
	}

	const onCancelModalClick = () => {
		setIsModalFormVisible(false)
	}

	const onConfirmModalClick = (event) => {
		event.preventDefault()
		if (newTitle) {
			dispatch(renameSet({ kitId: cardSetId, newTitle }))
			setIsModalFormVisible(false)
			setNewTitle('')
		}
	}

	const onModalChange = (event) => {
		setNewTitle(event.target.value)
	}

	const success = () => {
		message.success('Набор удалён')
	}

	const dropdownMenuHandler = ({ key }) => {
		switch (key) {
			case 'deleteSet':
				dispatch(deleteSet({ id: cardSetId }))
				navigate(`/${firstCardsSetIdAfterDelete}`)
				success()
				break;
			case 'renameSet':
				setIsModalFormVisible(true)
				break;
			default:
				break;
		}
	}

	const menu = (
		<Menu onClick={dropdownMenuHandler}>
			<Menu.Item key='renameSet'>
				Переименовать набор
			</Menu.Item>
			<Menu.Item key='deleteSet'>
				Удалить набор
			</Menu.Item>
		</Menu>
	)


	return (
		<>
			{isCardsSetExist
				?
				(<>
					<Header className={classes.header}>
						<CardsSetStatistic
							title={title}
							cardsNumber={cards.length}
							cardsDone={getCardsDoneNumber(cards)}
							onClick={onStartQuizClick}
						/>
						<Dropdown
							overlay={menu}
							placement="bottomRight"
							trigger={['click']}
						>
							<Button
								type='text'
								className={classes.moreBtn}
								icon={<MoreOutlined />}
							/>
						</Dropdown>
						<ModalForm
							visible={isModalFormVisible}
							width={300}
							position={{ top: 20, right: 60 }}
							canсelClick={onCancelModalClick}
							confirmClick={onConfirmModalClick}
							cancelText='Отменить'
							confirmText='Сохранить'
							inputOnChange={onModalChange}
							inputValue={newTitle}
						/>
					</Header>
					<Content className={classes.content}>
						{isCreateCardOpen
							?
							<NewCard
								cardSetId={cardSetId}
								setIsCreateCardOpen={setIsCreateCardOpen}
							/>
							:
							<CardsSetTable
								cards={cards}
								dispatch={dispatch}
								setIsCreateCardOpen={setIsCreateCardOpen}
								cardSetId={cardSetId}
							/>
						}
					</Content>
				</>)
				:
				<NotFound />
			}
		</>
	)
}