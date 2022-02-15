import React from 'react';
import classes from './NotFound.module.css'

import { Result } from 'antd';

import { Link } from 'react-router-dom';



export const NotFound = () => {

const linkBtn = <Link className={classes.link} to='/'>Вернуться на главную</Link>

	return (
		<Result
			status="404"
			title="404"
			subTitle="Извините, страница, которую вы посетили, не существует."
			extra={linkBtn}
		/>
	)
}
