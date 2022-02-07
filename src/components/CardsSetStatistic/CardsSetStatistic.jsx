import React from 'react';
import classes from './CardsSetStatistic.module.css'
import { Progress, Statistic, Button, } from 'antd';
import { progressBarColor } from '../../utils/progressBarColor';

export const CardsSetStatistic = ({ title, cardsNumber, cardsDone,  }) => {
	const percent = Math.round((cardsDone * 100) / cardsNumber)
	 
	return (
		<div className={classes.statistic}>
			<div className={classes.statisticHeader}>
				<div>
					<h1 className={classes.statisticTitle}>{title}</h1>
					<Button type="primary" >Начать повторение</Button>
				</div>
				<div className={classes.statisticResult}>
					<Statistic title="Карточки" value={cardsDone} suffix={`/ ${cardsNumber}`} />
				</div>
			</div>
			<div className={classes.statisticProgressBar}>
				<Progress size='big' percent={percent} strokeColor={progressBarColor(percent)} />
			</div>
		</div>
	);
};
