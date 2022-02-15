import React, { useEffect, useState } from 'react';
import classes from './QuizCard.module.css';
import cn from 'classnames'

import { Button, Space } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import parse from 'html-react-parser';

import hljs from 'highlight.js';


export const QuizCard = ({ card, onCorrectNotCorrectBtnsClick }) => {
	const [isPanelActive, setIsPanelActive] = useState(false)

	useEffect(() => {
		hljs.highlightAll()
	}, [card])

	const onBtnclick = (event) => {
		onCorrectNotCorrectBtnsClick(event, card.id)
		setIsPanelActive(false)
	}

	const onPanelClick = () => {
		setIsPanelActive(active => !active)
	}

	const collapseHeader = <h2 className={classes.collapseTitle}>ПОКАЗАТЬ ОТВЕТ</h2>

	return (
		<div className={classes.card}>
			<div className={classes.cardHeader}>
				<div className={classes.cardBtns}>
					<Space size='middle'>
						<Button
							name='notCorrect'
							type="ghost"
							icon={<CloseOutlined className={classes.noBtnIcon} />}
							className={classes.noBtn}
							onClick={onBtnclick}
						>
							Не знаю
						</Button>
						<Button
							name='correct'
							type="primary"
							icon={<CheckOutlined className={classes.yesBtnIcon} />}
							className={classes.yesBtn}
							onClick={onBtnclick}
						>
							Знаю
						</Button>
					</Space>
				</div>
				<div className={classes.cardTitle}>
					<h1>{card.question}</h1 >
				</div>
			</div>
			<div className={cn(classes.cardBody, {
				[classes.active]: isPanelActive,
			})}>
				<div className={classes.panel} onClick={onPanelClick}>
					{collapseHeader}
				</div>
				<div className={classes.content}>
					{parse(card.answer)}
				</div>
			</div>
		</div>
	);
};
