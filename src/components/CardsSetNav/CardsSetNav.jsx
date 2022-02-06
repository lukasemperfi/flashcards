import React from 'react';
import classes from './CardsSetNav.module.css'
import { Button, Space, Input, Dropdown } from 'antd';
import { ModalForm } from '../UI/ModalForm/ModalForm';
import { CardsSetAdd } from '../CardsSetAdd/CardsSetAdd';



const { Search } = Input;

export const CardsSetNav = ({ disabledBtn, addCards, deleteCards, setIsCreateCardOpen }) => {


	return (
		<div className={classes.nav}>
			<Space className={classes.space} size={[8, 16]} wrap>

				<Search placeholder="Поиск по имени" allowClear style={{ width: 250 }} />
				<Button
					type="primary"
					onClick={ () => setIsCreateCardOpen(true) }
				>
					Создать карточку
				</Button>
				<CardsSetAdd
					showBtn={<Button type="primary" disabled={disabledBtn} >Создать список</Button>}
					addCardsSet={addCards}
				/>
				<Button
					type="primary"
					disabled={disabledBtn}
					onClick={deleteCards}
				>
					Удалить
				</Button>
			</Space>
		</div>
	);
};
