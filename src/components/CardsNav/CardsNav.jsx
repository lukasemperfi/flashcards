import React from 'react';
import classes from './CardsNav.module.css'
import { Button, Space, Input, Dropdown } from 'antd';
import { ModalForm } from '../UI/ModalForm/ModalForm';
import { CardsSetAdd } from '../CardsSetAdd/CardsSetAdd';


const { Search } = Input;

export const CardsNav = ({ selectedAll, disabledBtn }) => {

	const handlerSelect = () => {
		if (selectedAll) {
			// 'delete All'
		}

	}


	return (
		<div className={classes.nav}>
			<Space className={classes.space} size={[8, 16]} wrap>
				<Search placeholder="Поиск по имени" allowClear style={{ width: 250 }} />
				<CardsSetAdd 
					showBtn={<Button type="primary">Создать карточку</Button>}
				/>								
				<Button type="primary" disabled={disabledBtn} >Создать список</Button>
				<Button type="primary" disabled={disabledBtn} >Удалить</Button>
			</Space>
		</div>
	);
};
