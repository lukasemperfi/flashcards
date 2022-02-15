import React from 'react';
import classes from './CardsSetTableOptionsBar.module.css'

import { CardsSetAdd } from '../CardsSetAdd/CardsSetAdd';

import { Button, Space } from 'antd';

import { useDispatch, useSelector } from 'react-redux';
import { addSetFromCardsList } from '../../store/cardSetsSlice';
import { selectCardsById } from '../../store/selectors';


export const CardsSetTableOptionsBar = ({clearAllFilters, selectedRowKeys, setIsCreateCardOpen, cardSetId }) => {
	const dispatch = useDispatch()
	const selectedCards = useSelector(state => selectCardsById(state, cardSetId, selectedRowKeys))

	const addCardsKitFromCardsList = (title) => {
		dispatch(addSetFromCardsList({ title, cardSetId, cards: selectedCards }))
	}

	const showNewCard = () => {
		setIsCreateCardOpen(true)
	}

const showBtn = <Button type="primary" disabled={selectedRowKeys.length === 0} >Создать список</Button>

	return (
		<div className={classes.nav}>
			<Space className={classes.space} size={[8, 16]} wrap>
				<Button
					type="primary"
					onClick={showNewCard}
				>
					Создать карточку
				</Button>
				<CardsSetAdd
					showBtn={showBtn}
					addCardsSet={addCardsKitFromCardsList}
				/>
				<Button
					onClick={clearAllFilters}
				>
					Очистить все фильтры
				</Button>
			</Space>
		</div>
	);
};
