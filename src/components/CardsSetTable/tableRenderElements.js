import React from 'react'

import { Progress, message } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { TableSearchDropdown } from './TableSearchDropdown/TableSearchDropdown';

import { getProgressBarColor } from '../../utils/tableHelpers';



export const columnsProgressBar = (percent) => <Progress percent={+percent} steps={10} strokeColor={getProgressBarColor(+percent)} />

export const columnsSearchFilterIcon = filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
export const columnsSearchFilterDropdown = ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
	return <TableSearchDropdown
		setSelectedKeys={setSelectedKeys}
		selectedKeys={selectedKeys}
		confirm={confirm}
		clearFilters={clearFilters}
	/>
}

// export const columnsSearchFilterElements = {
// 	filterDropdown: columnsSearchFilterIcon,
// 	filterIcon: columnsSearchFilterDropdown,
// }


export const columnsProgressFilterDropdown = {
	filters: [
		{
			text: 'Плохо',
			value: 'bad',
		},
		{
			text: 'Хорошо',
			value: 'good',
		},
		{
			text: 'Отлично',
			value: 'excellent',
		},
	],
}

export const success = () => {
	message.success('Карточки успешно удалены');
};

