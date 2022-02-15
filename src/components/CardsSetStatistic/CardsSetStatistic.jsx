import React from 'react';
import classes from './CardsSetStatistic.module.css'
import { Progress, Statistic, Button, } from 'antd';

import { getProgressBarColor, getProgressPercent } from '../../utils/tableHelpers';


export const CardsSetStatistic = ({ title = '', cardsNumber = 0, cardsDone = 0, onClick }) => {
	const progresPercent = getProgressPercent(cardsDone, cardsNumber) || 0
	 
	return (
		<div className={classes.statistic}>
			<div className={classes.statisticHeader}>
				<div className={classes.statisticTitleWrapper}>
					<h1 className={classes.statisticTitle}>{title}</h1>
					<Button type="primary" onClick={onClick}>Начать повторение</Button>
				</div>
				<div className={classes.statisticResult}>
					<Statistic title="Карточки" value={cardsDone} suffix={`/ ${cardsNumber}`} />
				</div>
			</div>
			<div className={classes.statisticProgressBar}>
				<Progress size='big' percent={progresPercent} strokeColor={getProgressBarColor(progresPercent)} />
			</div>
		</div>
	);
};
