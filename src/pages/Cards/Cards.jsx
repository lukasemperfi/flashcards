import React from 'react';
import classes from './Cards.module.css'
import { Layout, Progress, Statistic, Typography, Button, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { CardsTable } from '../../components/CardsTable/CardsTable';
import { CardIdPage } from '../CardIdPage/CardIdPage';
import { CardsNav } from '../../components/CardsNav/CardsNav';
import { CardsStatistic } from '../../components/CardsStatistic/CardsStatistic';
import { NewCard } from '../../components/NewCard/NewCard';
import { Quiz } from '../../components/Quiz/Quiz';
const { Header, Content } = Layout;
const { Title } = Typography;
const { Search } = Input;


export const Cards = () => {

	return (
		<>
			<Header className={classes.header}>
				<CardsStatistic />
			</Header>
			<Content className={classes.content}>
				<CardsNav />
				<CardsTable />
				{/* <CardIdPage /> */}
				{/* <NewCard /> */}
			</Content>
			{/* <Quiz/> */}
		</>
	);
};
