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
import { deleteCardSet } from '../../store/cardSetsSlice';
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
	const [selectedAll, setSelectedAll] = useState(false)
	const [disabledBtn, setDisabledBtn] = useState(true)


	const tableData = cards && cards.map(card => {
		// console.log('render')
		const progress = Math.round((card.statistics.correct * 100) / card.statistics.repeat)
		return { ...card, key: card.id, statistics: { ...card.statistics, progress } }
	})

	const cardsDone = tableData && tableData.filter(card => card.statistics.progress > 65).length

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
		if (key === 'deleteCardSet') {
			console.log('work')
			dispatch(deleteCardSet({ id: cardSetId }))
			setViewDeleteMessage(true)
		}
	}

	const menu = (
		<Menu onClick={dropdownMenuHandler}>
			<Menu.Item key='deleteCardSet'>
				Удалить набор
			</Menu.Item>
		</Menu>
	)


	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			setDisabledBtn(selectedRows.length === 0)
		},
		onSelectAll: (selected, selectedRows, changeRows) => {
			setSelectedAll(selected)
		},
	};
// console.log(selectedRows);
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
						<CardsNav 
						selectedAll={selectedAll}
						disabledBtn={disabledBtn}
						/>
						<CardsTable
							data={tableData}
							progressBarColor={progressBarColor}
							rowSelection={rowSelection}
						/>
					</Content>
				</>
				)}

		</>
	);
};
