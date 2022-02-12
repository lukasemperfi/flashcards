import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import classes from './CollapsedInput.module.css'
import cn from 'classnames'

import { SearchOutlined } from '@ant-design/icons';
import { CSSTransition } from 'react-transition-group';


export const CollapsedInput = ({ collapsed, inputOnChange, inputValue }) => {
	const searchRef = useRef(null)
	const [isSearchVisible, setIsSearchVisible] = useState(false)

	useEffect(() => {
		if (isSearchVisible) {
			setIsSearchVisible(false)
		}
	}, [collapsed])

	useEffect(() => {
		if (isSearchVisible) {
			setTimeout(() => searchRef.current.focus(), 100)
		}
	}, [isSearchVisible])


	const showSearch = () => {
		if (collapsed) {
			setIsSearchVisible(visible => !visible)
		}
	}


	return (
		<div className={cn(classes.search, {
			[classes.hidenSearchFocus]: collapsed,
		})}
		>
			<CSSTransition
				in={isSearchVisible}
				timeout={300}
				classNames={{
					enterActive: classes.showSearchEnterActive,
					enterDone: classes.showSearchEnterDone,
					exitActive: classes.showSearchExit,
					exitDone: classes.showSearchExitActive
				}}
			>
				{<input
					className={cn(classes.searchInput, {
						[classes.collapsed]: collapsed,
					})}
					placeholder="Поиск"
					value={inputValue}
					onChange={inputOnChange}
					ref={searchRef}
				/>}
			</CSSTransition>
			<Button
				onClick={showSearch}
				className={cn(classes.searchBtn, {
					// [classes.showSearchBtn]: isSearchVisible,
				})}
				icon={<SearchOutlined className={classes.searchIcon} />}
			/>
		</div>
	);
};
