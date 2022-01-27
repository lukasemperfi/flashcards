import React from 'react';
import classes from './Cards.module.css'
import { Layout, Progress, Statistic, Typography, Button } from 'antd';
const { Header, Content } = Layout;
const { Title } = Typography;


export const Cards = () => {

	return (
		<>
			<Header className={classes.header}>
				<div className={classes.headerRow}>
					<div className={classes.headerTop}>
						<h1 className={classes.headerTitle}>JavaScript</h1>
						<Button type="primary" >Начать повторение</Button>
					</div>
					<div className={classes.headerResult}>
						{/* <span>7/10</span> */}
						<Statistic title="Карточки" value={93} suffix="/ 100" />
					</div>
					<div className={classes.headerProgressBar}>
						<Progress size='big' percent={10} />
					</div>
				</div>
			</Header>
			<Content>Content</Content>
		</>
	);
};
