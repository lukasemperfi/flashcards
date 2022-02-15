import React, { useEffect, useRef } from 'react';

import { CardsSetTableOptionsBar } from '../CardsSetTableOptionsBar/CardsSetTableOptionsBar';
import { getTableData } from '../../utils/tableHelpers';

import { Table } from 'antd';

import { useTableFilters } from './useTableFilters';
import { columnsProgressBar, columnsProgressFilterDropdown, columnsSearchFilterDropdown, columnsSearchFilterElements, columnsSearchFilterIcon } from './tableRenderElements';
import { Link } from 'react-router-dom';

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export const CardsSetTable = ({ cards, setIsCreateCardOpen, cardSetId }) => {
	const tableRef = useRef(null)
	const tableData = getTableData(cards)
	const {
		filters,
		columnsFilters, 
		rowFilters,
		rowSelectionFilters, 
		paginationFilters, 
		onChangeTable, 
		clearAllFilters
	} = useTableFilters(cardSetId, cards)

	const {searchFilter, sortFilter, progressFilter} = columnsFilters
	const { selectAllRows, clearAllRows, deleteCardsFromCardsKit} = rowSelectionFilters


	useEffect(() => {
		clearAllFilters()
	}, [cardSetId])


	const rowSelection = {
		...rowFilters,
		selections: [
			{
				key: 'allData',
				text: 'Выбрать все',
				onSelect: selectAllRows,
			},
			{
				key: 'clearData',
				text: 'Снять выделение',
				onSelect: clearAllRows,
			},
			{
				key: 'deleteChecked',
				text: 'Удалить выбранные',
				onSelect: deleteCardsFromCardsKit,
			},
		],
	};

	const pagination = {
		position: ['bottomCenter'],
		...paginationFilters
	}

	const columns = [
		{
			title: 'Имя карточки',
			dataIndex: 'question',
			key: 'question',
			...searchFilter,
			filterDropdown: columnsSearchFilterDropdown,
			filterIcon: columnsSearchFilterIcon,
			render:  (text, record) => <Link to={`/${cardSetId}/${record.id}`}>{text}</Link>,
			ellipsis: true,
		},
		{
			title: 'Повторов',
			dataIndex: ['statistics', 'repeat'],
			key: 'repeat',
			align: 'center',
			width: '90px',
			...sortFilter,
			ellipsis: true,
		},
		{
			title: 'Знаю',
			dataIndex: ['statistics', 'correct'],
			key: 'correct',
			align: 'center',
			width: '55px',
			ellipsis: true,
		},
		{
			title: 'Не знаю',
			dataIndex: ['statistics', 'notCorrect'],
			key: 'notCorrect',
			align: 'center',
			width: '75px',
			ellipsis: true,
		},
		{
			title: 'Прогресс',
			dataIndex: ['statistics', 'progress'],
			key: 'progress',
			align: 'center',
			width: 230,
			...progressFilter,
			...columnsProgressFilterDropdown,
			render: columnsProgressBar,
			ellipsis: true,
		},
	];

	
	return (
		<>
			<CardsSetTableOptionsBar
				selectedRowKeys={filters.selectedRowKeys}
				clearAllFilters={clearAllFilters}
				cardSetId={cardSetId}
				setIsCreateCardOpen={setIsCreateCardOpen}
			/>
			<div ref={tableRef} style={{ position: 'relative' }}>
				<Table
					rowSelection={rowSelection}
					columns={columns}
					dataSource={tableData}
					size='small'
					scroll={{ x: 615 }}
					onChange={onChangeTable}
					pagination={pagination}
					getPopupContainer={() => tableRef.current}
				/>
			</div>
		</>
	);
};
