import React from 'react';
import classes from './CardsNav.module.css'
import {Button, Space, Input } from 'antd';
const { Search } = Input;

export const CardsNav = () => {
	return (
		<div className={classes.nav}>
			<Space className={classes.space} size={[8, 16]} wrap>
				<Search placeholder="Поиск по имени" allowClear style={{ width: 250 }} />
				<Button type="primary">Создать карточку</Button>
				<Button type="primary" disabled >Создать список</Button>
				<Button type="primary" disabled >Удалить</Button>
			</Space>
		</div>
	);
};
