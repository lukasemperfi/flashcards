import React from 'react';
import classes from './CardsSetStatistic.module.css'
import { Progress, Statistic, Button, } from 'antd';
import { progressBarColor } from '../../utils/progressBarColor';
import { getProgressPercent } from '../../utils/tableHelpers';


export const CardsSetStatistic = ({ title, cardsNumber, cardsDone, onClick }) => {
	const percent = getProgressPercent(cardsDone, cardsNumber)
	 
	return (
		<div className={classes.statistic}>
			<div className={classes.statisticHeader}>
				<div>
					<h1 className={classes.statisticTitle}>{title}</h1>
					<Button type="primary" onClick={onClick}>Начать повторение</Button>
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
