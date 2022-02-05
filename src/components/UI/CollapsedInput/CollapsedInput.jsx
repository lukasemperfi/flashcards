import React, { useEffect, useRef, useState } from 'react';
import { Button, Tooltip } from 'antd';
import classes from './CollapsedInput.module.css'
import cn from 'classnames'

import { SearchOutlined } from '@ant-design/icons';


export const CollapsedInput = ({ collapsed, inputOnChange, inputValue }) => {
	const [visibleSearch, setVisibleSearch] = useState(false)
	const searchRef = useRef(null)

	const showSearch = (event) => {
		if (collapsed) {
			setVisibleSearch(prev => !prev)
		}
	}

	// const onBlur = () => {
	// 	if (collapsed && visibleSearch) {
	// 		setVisibleSearch(false)
	// 	}
	// }

	useEffect(() => {
		setVisibleSearch(false)
	}, [collapsed])



	return (
		<div className={cn(classes.search, {
			[classes.hidenSearchFocus]: collapsed,
		})}
		>
			<input
				className={cn(classes.searchInput, {
					[classes.collapsed]: collapsed,
					[classes.showSearch]: visibleSearch,
				})}
				placeholder="Поиск"
				value={inputValue}
				onChange={inputOnChange}
				// onBlur={onBlur}
				ref={searchRef}
			/>
			<Tooltip overlayStyle={{ display: !visibleSearch ? '' : 'none' }} placement="right" title={'Поиск'} align={{ offset: [16, 0] }} trigger={collapsed && !visibleSearch ? 'hover' : ''}>
				<Button
					onClick={showSearch}
					className={cn(classes.searchBtn, {
						[classes.showSearchBtn]: visibleSearch,
					})}
					icon={<SearchOutlined className={classes.searchIcon} />}
				/>
			</Tooltip>
		</div>
	);
};
