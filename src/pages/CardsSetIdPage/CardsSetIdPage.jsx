import React, { useCallback, useMemo, useState } from 'react';
import classes from './CardsSetIdPage.module.css'
import { Layout, Progress, Menu, Typography, Button, Input, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { CardsSetTable } from '../../components/CardsSetTable/CardsSetTable';
import { CardIdPage } from '../CardIdPage/CardIdPage';
import { CardsSetStatistic } from '../../components/CardsSetStatistic/CardsSetStatistic';
import { NewCard } from '../../components/NewCard/NewCard';
import { Quiz } from '../../components/Quiz/Quiz';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCardSetById } from '../../store/selectors';
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { deleteSet, deleteCardsFromSet, addSetFromCardsList } from '../../store/cardSetsSlice';
import { TestEditor } from '../../components/TestEditor';
const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;


export const CardsSetIdPage = () => {
	const { cardSetId } = useParams()
	const { title = '', cards = [] } = useSelector(state => selectCardSetById(state, cardSetId))
	const [viewDeleteMessage, setViewDeleteMessage] = useState(false)
	const [isCreateCardOpen, setIsCreateCardOpen] = useState(false)
	const dispatch = useDispatch()


	const cardsDone = cards && cards.filter(card => {
		const progress = Math.round((card?.statistics?.correct * 100) / card?.statistics?.repeat)
		return progress > 65
	}).length


	const dropdownMenuHandler = ({ key }) => {
		if (key === 'deleteSet') {
			dispatch(deleteSet({ id: cardSetId }))
			setViewDeleteMessage(true)
		}
	}

	const menu = (
		<Menu onClick={dropdownMenuHandler}>
			<Menu.Item key='deleteSet'>
				Удалить набор
			</Menu.Item>
		</Menu>
	)


	return (
		<>
			{viewDeleteMessage  && <div>Набор удалён</div>}
			{(!cards.length && !viewDeleteMessage) && <div>Страница не найдена</div>}
			{(!!cards.length) &&
				(<>
					<Header className={classes.header}>
						<CardsSetStatistic
							title={title}
							cardsNumber={cards.length}
							cardsDone={cardsDone}
						/>
						<Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
							<Button
								type='text'
								className={classes.moreBtn}
								icon={<MoreOutlined />}
							/>
						</Dropdown>

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

			}

		</>
	);
};
