import React from 'react';
import classes from './CardsStatistic.module.css'
import { Progress, Statistic, Button, } from 'antd';

export const CardsStatistic = () => {
	return (
		<div className={classes.statistic}>
			<div className={classes.statisticHeader}>
				<h1 className={classes.statisticTitle}>JavaScript</h1>
				<Button type="primary" >Начать повторение</Button>
			</div>
			<div className={classes.statisticResult}>
				<Statistic title="Карточки" value={93} suffix="/ 100" />
			</div>
			<div className={classes.statisticProgressBar}>
				<Progress size='big' percent={10} />
			</div>
		</div>
	);
};
