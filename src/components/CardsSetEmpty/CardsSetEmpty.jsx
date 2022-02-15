import React from 'react'
import { Empty } from 'antd';
import classes from './CardsSetEmpty.module.css'


export const CardsSetEmpty = ({hasButton, buttonText, emptyButton, image, height, description}) => {
	const desc = description

	return (
		<div className={classes.wrapper}>
			<Empty
				image={image}
				imageStyle={{height}}
				description={desc}
			>
				{hasButton && emptyButton}
			</Empty>
		</div>
	)
}
