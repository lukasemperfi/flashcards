import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Progress, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { progressBarColor } from '../../utils/progressBarColor';
import { deleteSet, deleteCardsFromSet, addSetFromCardsList } from '../../store/cardSetsSlice';
import { CardsSetTableOptionsBar } from '../CardsSetTableOptionsBar/CardsSetTableOptionsBar';
import { useRef } from 'react';
import parse from 'html-react-parser';
import { TableSearchDropdown } from './TableSearchDropdown/TableSearchDropdown';
import { useCallback } from 'react';
import { useMemo } from 'react';
import { getProgressPercent } from '../../utils/tableHelpers';




export const CardsSetTable = ({ cards, dispatch, setIsCreateCardOpen, cardSetId }) => {
	const [selectedCards, setSelectedCards] = useState([])

	// const [selectedRowKeys, setSelectedRowKeys] = useState([])
	// const [paginationPage, setPaginationPage] = useState(1)
	// const [filteredInfo, setFilteredInfo] = useState(null)
	// const [sortedInfo, setSortedInfo] = useState(null)

	const [filters, setFilters] = useState({
		selectedRowKeys: [],
		filteredInfo: null,
		sortedInfo: null,
		paginationPage: 1,
	})



	useEffect(() => {

		clearAll()
	}, [cardSetId])

	const isFiltersActive = () => {
		console.log('render func')
		const { selectedRowKeys, filteredInfo, sortedInfo, paginationPage } = filters
		const isFilteredActive = filteredInfo !== null && Object.values(filteredInfo).some(filter => filter !== null)
		const isSortedActive = sortedInfo !== null && sortedInfo.column !== undefined
		if (selectedRowKeys.length > 0 || isFilteredActive || isSortedActive || paginationPage > 1) {
			return true
		}
		return false
	}

	const clearAll = () => {
		if (isFiltersActive()) {
			setFilters({
				selectedRowKeys: [],
				filteredInfo: null,
				sortedInfo: null,
				paginationPage: 1,
			})
		}
	}

	console.log(filters)
	const [isSearchVisible, setIsSearchVisible] = useState(false)
	const tableRef = useRef(null)


	const tableData = useMemo(() => {
		return cards.map(card => {
			const progress = getProgressPercent(card?.statistics?.correct, card?.statistics?.repeat)
			return { ...card, key: card.id, statistics: { ...card?.statistics, progress } }
		})
	}, [cards])

	console.log(tableData);


	const columnsLink = (text, record) => <Link to={`/${cardSetId}/${record.id}`}>{text}</Link>
	const columnsSortNumberFilter = (a, b) => a.statistics.repeat - b.statistics.repeat
	const columnsProgressBar = (percent) => <Progress percent={+percent} steps={10} strokeColor={progressBarColor(+percent)} />
	const columnsProgressFilterDropdownOptions = [
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
	]
	const columnsProfressFilter = (value, record) => {
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
	}
	const columnsSearchFilterIcon = filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
	const columnsSearchFilterDropdown = ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
		return <TableSearchDropdown
			setSelectedKeys={setSelectedKeys}
			selectedKeys={selectedKeys}
			confirm={confirm}
			clearFilters={clearFilters}
			isSearchVisible={isSearchVisible}
		/>
	}
	const columnsSearchFilter = (value, record) => record?.question.toString().toLowerCase().includes(value.toLowerCase())


	const onChangeRow = (selectedRowKeys, selectedRows) => {
		setSelectedCards(selectedRows)
		setFilters({ ...filters, selectedRowKeys })
	}



	const rowSelection = {
		selectedRowKeys: filters.selectedRowKeys,
		onChange: onChangeRow,
		selections: [
			{
				key: 'allData',
				text: 'Выбрать все',
				onSelect: () => {
					setFilters({ ...filters, selectedRowKeys: tableData.map(row => row.key) })
				},
			},
			{
				key: 'clearData',
				text: 'Снять выделение',
				onSelect: () => {
					setFilters({ ...filters, selectedRowKeys: [] })
				},
			},
			{
				key: 'deleteChecked',
				text: 'Удалить выбранные',
				onSelect: () => {
					deleteCardsFromCardsKit()
				}
			},
		]
	};

	const handleChange = (pagination, tableFilters, sorter) => {
		setFilters({ ...filters, filteredInfo: tableFilters, sortedInfo: sorter })
	}




	const addCardsKitFromCardsList = (title) => {
		dispatch(addSetFromCardsList({ title, cards: selectedCards }))
		// setSelectedRowKeys([])
		setFilters({ ...filters, selectedRowKeys: [] })
	}

	const success = () => {
		message.success('Карточки успешно удалены');
	  };

	const deleteCardsFromCardsKit = () => {
		if (filters.selectedRowKeys.length > 0) {
			dispatch(deleteCardsFromSet({ kitId: cardSetId, cardsId: filters.selectedRowKeys }))
			// setSelectedRowKeys([])
			setFilters({ ...filters, selectedRowKeys: [] })
			success()
		}
	}

	const createNewCard = () => {
		setIsCreateCardOpen(true)
	}

	const columns = [
		{
			title: 'Имя карточки',
			dataIndex: 'question',
			key: 'question',
			filteredValue: filters.filteredInfo?.question || null,
			filterDropdown: columnsSearchFilterDropdown,
			onFilter: columnsSearchFilter,
			onFilterDropdownVisibleChange: setIsSearchVisible,
			filterIcon: columnsSearchFilterIcon,
			render: columnsLink,
			ellipsis: true,
		},
		{
			title: 'Повторов',
			dataIndex: ['statistics', 'repeat'],
			key: 'repeat',
			align: 'center',
			width: '90px',
			sortOrder: filters.sortedInfo?.columnKey === 'repeat' && filters.sortedInfo.order,
			sorter: columnsSortNumberFilter,
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
			render: columnsProgressBar,
			filteredValue: filters.filteredInfo?.progress || null,
			filters: columnsProgressFilterDropdownOptions,
			onFilter: columnsProfressFilter,
			ellipsis: true,
		},
	];

	return (
		<>
			<CardsSetTableOptionsBar
				disabledBtn={filters?.selectedRowKeys.length === 0}
				addCards={addCardsKitFromCardsList}
				deleteCards={deleteCardsFromCardsKit}
				setIsCreateCardOpen={setIsCreateCardOpen}
				clearFilters={clearAll}
				createNewCard={createNewCard}
			/>
			<div ref={tableRef} style={{ position: 'relative' }}>
				<Table
					rowSelection={{
						...rowSelection,
					}}
					columns={columns}
					dataSource={tableData}
					size='small'
					scroll={{ x: 615 }}
					onChange={handleChange}
					pagination={{
						position: ['bottomCenter'],
						current: filters.paginationPage,
						onChange: (page, pageSize) => setFilters({ ...filters, paginationPage: page }),
					}}
					getPopupContainer={() => tableRef.current}
				/>
			</div>
		</>
	);
};
