import React, { useCallback, useMemo, useState } from 'react';
import { Table, Button, Space } from 'antd';
import { useSelector } from 'react-redux';
import { selectCardSetById } from '../store/selectors';
import { SearchOutlined } from '@ant-design/icons';
import { TableSearchDropdown } from './CardsSetTable/TableSearchDropdown/TableSearchDropdown';



const data = [];
for (let i = 0; i < 46; i++) {
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`,
	});
}

export const TestTable = () => {
	// const { title = '', cards = [] } = useSelector(state => selectCardSetById(state, 1))
	const [paginationPage, setPaginationPage] = useState(1)
	const [filteredInfo, setFilteredInfo] = useState(null)
	const [sortedInfo, setSortedInfo] = useState(null)
	const [selectedCards, setSelectedCards] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const onChangeRow = (selectedRowKeys, selectedRows) => {
		setSelectedCards(selectedRows)
		setSelectedRowKeys(selectedRowKeys)
	}
// console.log(data.map( row => row.key));
// console.log(selectedRowKeys);
	const rowSelection = {
		selectedRowKeys,
		onChange: onChangeRow,
		selections: [
			{
				key: 'allData',
				text: 'Выбрать все',
				onSelect: () => {
				  setSelectedRowKeys(data.map( row => row.key))
				},
			  },
			  {
				key: 'clearData',
				text: 'Снять выделение',
				onSelect: () => {
				  setSelectedRowKeys([])
				},
			  },
			{
				key: 'newCardsKit',
				text: 'Создать список',
				onSelect: (record, selected, selectedRows, nativeEvent) => {
					console.log('create')
				}
			},
			{
				key: 'deleteChecked',
				text: 'Удалить выбранные',
				onSelect: (record, selected, selectedRows, nativeEvent) => {
					console.log('delete')
				}
			},
		]
	};

	const handleChange = (pagination, filters, sorter) => {
		console.log('Various parameters', pagination, filters, sorter);
		setFilteredInfo(filters)
		setSortedInfo(sorter)
	}

	const clearFilters = () => {
		setFilteredInfo(null)
	}

	const clearAll = () => {
		setFilteredInfo(null)
		setSortedInfo(null)
		setPaginationPage(1)
	}

	const setAgeSort = () => {
		setSortedInfo({ order: 'descend', columnKey: 'age' })
	}

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			filters: [
				{ text: 'Joe', value: 'Joe' },
				{ text: 'Jim', value: 'Jim' },
			],
			filteredValue: filteredInfo?.name || null,
			filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
				return <TableSearchDropdown
					// dataIndex={dataIndex}
					setSelectedKeys={setSelectedKeys}
					selectedKeys={selectedKeys}
					confirm={confirm}
					clearFilters={clearFilters}
				/>
			},
			onFilter: (value, record) => record.name.toString().toLowerCase().includes(value.toLowerCase()),
			filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
			ellipsis: true,
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			sorter: (a, b) => a.age - b.age,
			sortOrder: sortedInfo?.columnKey === 'age' && sortedInfo.order,
			ellipsis: true,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
			filters: [
				{ text: 'London', value: 'London' },
				{ text: 'New York', value: 'New York' },
			],
			filteredValue: filteredInfo?.address || null,
			onFilter: (value, record) => record.address.includes(value),
			ellipsis: true,
		},
	]


	return (
		<>
			<Space style={{ marginBottom: 16 }}>
				<Button onClick={setAgeSort}>Sort age</Button>
				<Button onClick={clearFilters}>Clear filters</Button>
				<Button onClick={clearAll}>Clear filters and sorters</Button>
			</Space>
			<Table
				rowSelection={{
					...rowSelection,
				}}
				columns={columns}
				dataSource={data}
				onChange={handleChange}
				pagination={{
					position: ['bottomCenter'],
					current: paginationPage,
					onChange: (page, pageSize) => setPaginationPage(page),
				}}
			/>
		</>
	)
}
