import React, { useState } from 'react';
import classes from './Navbar.module.css'

import { CardsSetAdd } from '../CardsSetAdd/CardsSetAdd';

import { CollapsedButton } from '../UI/CollapsedButton/CollapsedButton';
import { CollapsedInput } from '../UI/CollapsedInput/CollapsedInput';
import { CardsSetMenu } from '../CardsSetMenu/CardsSetMenu';

import { useSelector } from 'react-redux';
import SimpleBar from 'simplebar-react';

import { useDispatch } from 'react-redux';
import { addSet } from '../../store/cardSetsSlice';
import { selectSearchedCardSets } from '../../store/selectors';


export const Navbar = ({ collapsed }) => {
	const dispatch = useDispatch()
	const [search, setSearch] = useState('')
	const cardsSet = useSelector(state => selectSearchedCardSets(state, search))


	const searchOnChange = (event) => {
		setSearch(event.target.value)
	}

	const addCardsKit = (title) => {
		dispatch(addSet({ title }))
	}

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
					<CardsSetMenu data={cardsSet} />
			</SimpleBar>
		</div>
	);
};


