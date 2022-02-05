import React from 'react';
import { Button, Input, Menu, Space, Tooltip } from 'antd';
import { PlusOutlined, DatabaseOutlined, SearchOutlined } from '@ant-design/icons';
import classes from './CollapsedButton.module.css'
import cn from 'classnames'


export const CollapsedButton = ({ collapsed, onClick }) => {
	return (
		<Tooltip placement="right" title={'Добавить'} align={{ offset: [16, 0] }} trigger={collapsed ? 'hover' : ''}>
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
		</Tooltip>
	);
};
