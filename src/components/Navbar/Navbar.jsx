import React, { useEffect, useState } from 'react';
import { Button, Input, Menu, Tooltip } from 'antd';
import classes from './Navbar.module.css'
import cn from 'classnames'

import { PlusOutlined, DatabaseOutlined, SearchOutlined } from '@ant-design/icons';

export const Navbar = ({ collapsed }) => {
	const [visibleSearch, setVisibleSearch] = useState(false)
	const onSearch = value => console.log(value);

	const showSearch = (event) => {
		if (collapsed) {
			setVisibleSearch(prev => !prev)
		}
	}

	useEffect(() => {
		console.log('collapsed render');
		setVisibleSearch(false)
	}, [collapsed])

	return (
		<>
			<div className={classes.navbarTop}>
				<div className={cn(classes.search, {
								[classes.hidenSearchFocus]: visibleSearch,
							})}
							>
					<input
						className={cn(classes.searchInput, {
							[classes.collapsed]: collapsed,
							[classes.showSearch]: visibleSearch,
						})}
						placeholder="Поиск"
						onChange={onSearch}
					/>
					<Tooltip placement="rightTop" title={'Поиск'} >
						<Button
							onClick={showSearch}
							className={cn(classes.searchBtn, {
								[classes.showSearchBtn]: visibleSearch,
							})}
							icon={<SearchOutlined className={classes.searchIcon} />}
						/>
					</Tooltip>
				</div>
				<Tooltip placement="rightTop" title={'Добавить'} >
					<Button
						type='primary'
						className={classes.addBtn}
						icon={<PlusOutlined className={classes.addBtnIcon} />}
					>
						<div
							className={cn(classes.addBtnText, {
								[classes.collapsed]: collapsed,
							})}
						>
							Создать
						</div>
					</Button>
				</Tooltip>
			</div>
			<Menu
				className={classes.menu}
				theme="dark"
				defaultSelectedKeys={['1']}
				mode="inline"
			>
				{Array(30).fill(1).map((el, i) => {
					return (
						<Menu.Item key={i} icon={<DatabaseOutlined />}>
							nav more text bla test yoxu {i}
						</Menu.Item>
					)
				})}
			</Menu>
		</>
	);
};
