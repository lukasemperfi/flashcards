import React from 'react';
import { Table, Tag, Space, Progress } from 'antd';

const rowSelection = {
	onChange: (selectedRowKeys, selectedRows) => {
		console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
	},
	getCheckboxProps: (record) => ({
		disabled: record.name === 'Disabled User',
		// Column configuration not to be checked
		name: record.name,
	}),
};


export const CardsTable = () => {



	const columns = [
		{
			title: 'Имя карточки',
			dataIndex: 'name',
			render: (text) => <a href="#">{text}</a>,
		},
		{
			title: 'Повторов',
			dataIndex: 'age',
			align: 'center',
			width: '90px',
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: 'Знаю',
			dataIndex: 'age',
			align: 'center',
			width: '55px',
		},
		{
			title: 'Не знаю',
			dataIndex: 'age',
			align: 'center',
			width: '75px',
		},
		{
			title: 'Прогресс',
			dataIndex: 'progress',
			align: 'center',
			width: 230,
			render: (text) => <Progress percent={+text} steps={10} />,
			filters: [
				{
					text: 'Плохо',
					value: 'London',
				},
				{
					text: 'Хорошо',
					value: '>= 70',
				},
				{
					text: 'Отлично',
					value: 'New York',
				},
			],
			onFilter: (value, record) => record.address.indexOf(value) === 0,
		},
	];

const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 1 + i,
		progress: 10 + i,
		address: `London, Park Lane no. ${i}`,
	});
}
return (
	<Table
		rowSelection={{
			...rowSelection,
		}}
		columns={columns}
		dataSource={data}
		size='small'
		pagination={{ position: ['topRight', 'bottomRight'], simple: 'true' }}
	/>
);
};
