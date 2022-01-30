import React from 'react';
import { Input, Space, PageHeader, Button, Anchor } from 'antd';
import classes from './CardIdPage.module.css'
import { CardForm } from '../../components/CardForm/CardForm';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { TestEditor } from '../../components/TestEditor';
const { TextArea } = Input;
const { Link } = Anchor;

export const CardIdPage = () => {
	return (
		<>
			<div className={classes.btnBack}>
				<Button type="text" href='#' icon={<ArrowLeftOutlined />}>
					Назад
				</Button>
			</div>
			<div className='containerCard'>
				{/* <div className={classes.btnEdit}>
					<Button type='primary'>Редактировать</Button>
				</div> */}
				{/* <CardForm /> */}
				<TestEditor />
			</div >
		</>

	);
};
