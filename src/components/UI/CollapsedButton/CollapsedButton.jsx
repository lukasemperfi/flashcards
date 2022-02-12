import React from 'react'
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import classes from './CollapsedButton.module.css'
import cn from 'classnames'


export const CollapsedButton = ({ collapsed, onClick }) => {
	return (
			<Button
				className={classes.addBtn}
				icon={<PlusOutlined className={classes.addBtnIcon} />}
				onClick={onClick}
			>
				<div
					className={cn(classes.addBtnText, {
						[classes.collapsed]: collapsed,
					})}
				>
					Создать
				</div>
			</Button>
	)
}
