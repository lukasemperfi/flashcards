import React, { useState } from 'react';
import { Table, Tag, Space, Progress, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';



export const CardsTable = ({ data, progressBarColor, rowSelection }) => {


	const columns = [
		{
			title: 'Имя карточки',
			dataIndex: 'question',
			render: (text) => <Link to="/card">{text}</Link>,
		},
		{
			title: 'Повторов',
			dataIndex: ['statistics', 'repeat'],
			align: 'center',
			width: '90px',
			sorter: (a, b) => a.statistics.repeat - b.statistics.repeat,
		},
		{
			title: 'Знаю',
			dataIndex: ['statistics', 'correct'],
			align: 'center',
			width: '55px',
		},
		{
			title: 'Не знаю',
			dataIndex: ['statistics', 'notCorrect'],
			align: 'center',
			width: '75px',
		},
		{
			title: 'Прогресс',
			dataIndex: ['statistics', 'progress'],
			align: 'center',
			width: 230,
			render: (percent) => <Progress percent={+percent} steps={10} strokeColor={progressBarColor(+percent)} />,
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
			onFilter: (value, record) => {
				const progress = record.statistics.progress
				if (value === 'bad') {
					return progress < 50
				}
				if (value === 'good') {
					return (progress > 49 && progress < 66)
				}
				if (value === 'excellent') {
					return progress > 65
				}
			},
		},
	];

	return (
		<Table
			rowSelection={{
				...rowSelection,
			}}
			columns={columns}
			dataSource={data}
			size='small'
			scroll={{ x: 615 }}
			pagination={{ position: ['bottomCenter'] }}
		/>
	);
};
