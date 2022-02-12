import React from 'react';
import classes from './CardsSetTableOptionsBar.module.css'
import { Button, Space, Input, Dropdown } from 'antd';
import { ModalForm } from '../UI/ModalForm/ModalForm';
import { CardsSetAdd } from '../CardsSetAdd/CardsSetAdd';



const { Search } = Input;

export const CardsSetTableOptionsBar = ({ disabledBtn, addCards, deleteCards, createNewCard, clearFilters }) => {


	return (
		<div className={classes.nav}>
			<Space className={classes.space} size={[8, 16]} wrap>

				{/* <Input placeholder="Поиск по имени" allowClear style={{ width: 250 }} /> */}
				<Button
					type="primary"
					onClick={createNewCard}
				>
					Создать карточку
				</Button>
				<CardsSetAdd
					showBtn={<Button type="primary" disabled={disabledBtn} >Создать список</Button>}
					addCardsSet={addCards}
				/>
				<Button
					onClick={clearFilters}
				>
					Очистить все фильтры
				</Button>
				{/* <Button
					type="primary"
					disabled={disabledBtn}
					onClick={deleteCards}
				>
					Удалить
				</Button> */}
			</Space>
		</div>
	);
};
