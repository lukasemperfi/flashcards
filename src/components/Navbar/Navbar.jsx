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

import { selectCardSets, selectSearchedCardSets } from '../../store/selectors';
import { CardsMenu } from '../CardsMenu/CardsMenu';


export const Navbar = ({ collapsed }) => {
	const [search, setSearch] = useState('')
	const cardsSet = useSelector(state => selectSearchedCardSets(state, search))

	const searchOnChange = (event) => {
		setSearch(event.target.value)
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
					/>
				</div>
			</div>
			<SimpleBar style={{ maxHeight: 'calc(100% - 150px)' }}>
				{testData.length
					?
					<CardsMenu data={cardsSet} />
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


