import React from 'react';
import classes from './QuizResult.module.css';

import { Progress } from 'antd';

import { getProgressBarColor, getProgressPercent } from '../../utils/tableHelpers';


export const QuizResult = ({ result }) => {
	const { correct, notCorrect } = result
	const progressPercent = getProgressPercent(correct, (correct + notCorrect))

	return (
		<div className={classes.result}>
			<div className={classes.resultTitle}>
				<h2>Ваш результат:</h2>
			</div>

			<div className={classes.resultBody}>
				<div className={classes.resultStatistics}>
					<div>
						<span>{`Знаю: ${correct}`}</span>
					</div>
					<div>
						<span>{`Не знаю: ${notCorrect}`}</span>
					</div>
				</div>
				<Progress
					type="circle"
					percent={progressPercent}
					width={80}
					strokeColor={getProgressBarColor(progressPercent)}
				/>
			</div>
		</div>
	);
};
