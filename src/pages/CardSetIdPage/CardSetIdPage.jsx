import React, { useCallback, useMemo, useState } from 'react';
import classes from './CardSetIdPage.module.css'
import { Layout, Progress, Menu, Typography, Button, Input, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { CardsTable } from '../../components/CardsTable/CardsTable';
import { CardIdPage } from '../CardIdPage/CardIdPage';
import { CardsNav } from '../../components/CardsNav/CardsNav';
import { CardsStatistic } from '../../components/CardsStatistic/CardsStatistic';
import { NewCard } from '../../components/NewCard/NewCard';
import { Quiz } from '../../components/Quiz/Quiz';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCardSetById } from '../../store/selectors';
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import { deleteSet, deleteCardsFromSet } from '../../store/cardSetsSlice';
import { addSetFromCardsList } from '../../store/cardSetsSlice';
import { TestEditor } from '../../components/TestEditor';
const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;


export const CardSetIdPage = () => {
	const dispatch = useDispatch()
	const { cardSetId } = useParams()
	const cardSet = useSelector(state => selectCardSetById(state, cardSetId))
	const { title, cards } = cardSet
	const emptyCardSet = Object.keys(cardSet).length === 0;
	const [viewDeleteMessage, setViewDeleteMessage] = useState(false)
	const [selectedCards, setSelectedCards] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const [isCreateCardOpen, setIsCreateCardOpen] = useState(false)


	const tableData = cards && cards.map(card => {
		// console.log('render')
		const progress = Math.round((card?.statistics?.correct * 100) / card?.statistics?.repeat)
		return { ...card, key: card.id, statistics: { ...card?.statistics, progress } }
	})

	const cardsDone = tableData && tableData.filter(card => card?.statistics?.progress > 65).length

	const progressBarColor = (percent) => {
		if (percent < 50) {
			return '#ff4d4f'
		}
		if (percent > 49 && percent < 66) {
			return '#faad14'
		}
		if (percent > 65) {
			return '#00a82d'
		}
	}

	const dropdownMenuHandler = ({ key }) => {
		if (key === 'deleteSet') {
			console.log('work')
			dispatch(deleteSet({ id: cardSetId }))
			setViewDeleteMessage(true)
		}
	}

	const addCardsKitFromCardsList = (title) => {
		dispatch(addSetFromCardsList({ title, cards: selectedCards }))
		setSelectedRowKeys([])
	}

	const deleteCardsFromCardsKit = () => {
		if (selectedRowKeys.length > 0) {
			dispatch(deleteCardsFromSet({ kitId: cardSetId, cardsId: selectedRowKeys }))
			setSelectedRowKeys([])
		}
	}

	const menu = (
		<Menu onClick={dropdownMenuHandler}>
			<Menu.Item key='deleteSet'>
				Удалить набор
			</Menu.Item>
		</Menu>
	)


	const rowSelection = {
		selectedRowKeys,
		onChange: (selectedRowKeys, selectedRows) => {
			setSelectedCards(selectedRows)
			setSelectedRowKeys(selectedRowKeys)
		},
	};


	return (
		<>
			{viewDeleteMessage && <div>Набор удалён</div>}
			{(emptyCardSet && !viewDeleteMessage) && <div>Страница не найдена</div>}
			{!emptyCardSet &&
				(<>
					<Header className={classes.header}>
						<CardsStatistic
							title={title}
							cardsNumber={cards.length}
							cardsDone={cardsDone}
							progressBarColor={progressBarColor}
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
							(
								<>
									<CardsNav
										disabledBtn={selectedRowKeys.length === 0}
										addCards={addCardsKitFromCardsList}
										deleteCards={deleteCardsFromCardsKit}
										setIsCreateCardOpen={setIsCreateCardOpen}
									/>
									<CardsTable
										data={tableData}
										progressBarColor={progressBarColor}
										rowSelection={rowSelection}
									/>
								</>
							)
						}

					</Content>
				</>
				)}

		</>
	);
};
