import React from 'react'
import classes from './Card.module.css'

import parse from 'html-react-parser';


export const Card = ({card}) => {
	return (
		<div className={classes.cardContent}>
			<div className={classes.cardHeader}>
				<div className={classes.cardTitle}>
					<h1>{parse(card.question)}</h1>
				</div>
			</div>
			<div className={classes.cardBody}>
				{parse(card.answer)}
			</div>
		</div>
	)
}
