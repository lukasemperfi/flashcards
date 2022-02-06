import React, { useState } from 'react';
import { Menu, Empty } from 'antd';
import classes from './Navbar.module.css'
import cn from 'classnames'
import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';
import { CollapsedButton } from '../UI/CollapsedButton/CollapsedButton';
import { CollapsedInput } from '../UI/CollapsedInput/CollapsedInput';
import { DatabaseOutlined } from '@ant-design/icons';
import { CardsSetAdd } from '../CardsSetAdd/CardsSetAdd';
import { useDispatch } from 'react-redux';
import { addSet } from '../../store/cardSetsSlice';

import { selectCardSets, selectSearchedCardSets } from '../../store/selectors';
import { CardsSetMenu } from '../CardsSetMenu/CardsSetMenu';


export const Navbar = ({ collapsed }) => {
	const [search, setSearch] = useState('')
	const cardsSet = useSelector(state => selectSearchedCardSets(state, search))
	const dispatch = useDispatch()

	const searchOnChange = (event) => {
		setSearch(event.target.value)
	}

	const addCardsKit = (title) => {
		dispatch(addSet({ title }))
	}

	const testData = Array(30).fill(1)
	const description = <span style={{ color: '#ffffff' }}>Нажмите 'Создать', <br /> чтобы создать набор карточек</span>

	return (
		<div className={classes.navbar}>
			<div className={classes.navbarTop}>
				<div className={classes.navbarTopCol}>
					<CollapsedInput
						collapsed={collapsed}
						inputValue={search}
						inputOnChange={searchOnChange}
					/>
				</div>
				<div className={classes.navbarTopCol}>
					<CardsSetAdd
						showBtn={<CollapsedButton collapsed={collapsed} />}
						addCardsSet={addCardsKit}
					/>
				</div>
			</div>
			<SimpleBar style={{ maxHeight: 'calc(100% - 150px)' }}>
				{testData.length
					?
					<CardsSetMenu data={cardsSet} />
					:
					(!collapsed && <Empty
						image={Empty.PRESENTED_IMAGE_SIMPLE}
						description={description}
					/>)
				}
			</SimpleBar>
		</div>
	);
};


