import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Progress, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { progressBarColor } from '../../utils/progressBarColor';
import { deleteSet, deleteCardsFromSet, addSetFromCardsList } from '../../store/cardSetsSlice';
import { CardsSetTableOptionsBar } from '../CardsSetTableOptionsBar/CardsSetTableOptionsBar';
import { useRef } from 'react';





export const CardsSetTable = ({ cards, dispatch, setIsCreateCardOpen, cardSetId }) => {
	const [selectedCards, setSelectedCards] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])
	const tableRef = useRef(null)

	const tableData = cards.map(card => {
		const progress = Math.round((card?.statistics?.correct * 100) / card?.statistics?.repeat)
		return { ...card, key: card.id, statistics: { ...card?.statistics, progress } }
	})


	// console.log(tableData);

	const columnsLink = (text, record) => <Link to={`/${cardSetId}/${record.id}`}>{text}</Link>
	const columnsSortNumber = (a, b) => a.statistics.repeat - b.statistics.repeat
	const columnsProgressBar = (percent) => <Progress percent={+percent} steps={10} strokeColor={progressBarColor(+percent)} />
	const columnsFiltersDropdownOptions = [
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
	const columnsFilterProgress = (value, record) => {
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

	const onChangeRow = (selectedRowKeys, selectedRows) => {
		setSelectedCards(selectedRows)
		setSelectedRowKeys(selectedRowKeys)
	}

	const addCardsKitFromCardsList = (title) => {
		dispatch(addSetFromCardsList({ title, cards: selectedCards }))
		setSelectedRowKeys([])
	}

	const deleteCardsFromCardsKit = () => {
		if (selectedRowKeys.length > 0) {
			dispatch(deleteCardsFromSet({ kitId: cardSetId, cardsId: selectedRowKeys }))
			setSelectedRowKeys([])
		}
	}

	const searchedTableData = (value, event) => {
		// console.log(value, event)
		return tableData.filter(card => card.question.toLowerCase().includes(value.toLowerCase()))
	}

	const rowSelection = {
		selectedRowKeys,
		onChange: onChangeRow,
	};

	const columns = [
		{
			title: 'Имя карточки',
			dataIndex: 'question',
			render: columnsLink,
			// filterSearch: true,
			// onFilter: (value, record) => {

			// }
		},
		{
			title: 'Повторов',
			dataIndex: ['statistics', 'repeat'],
			align: 'center',
			width: '90px',
			sorter: columnsSortNumber,
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
			render: columnsProgressBar,
			filters: columnsFiltersDropdownOptions,
			onFilter: columnsFilterProgress,
		},
	];

	return (
		<>
			<CardsSetTableOptionsBar
				disabledBtn={selectedRowKeys.length === 0}
				addCards={addCardsKitFromCardsList}
				deleteCards={deleteCardsFromCardsKit}
				setIsCreateCardOpen={setIsCreateCardOpen}
				onSearch={searchedTableData}
			/>
			<div ref={tableRef} style={{position: 'relative'}}>
			<Table
				rowSelection={{
					...rowSelection,
				}}
				columns={columns}
				dataSource={tableData}
				size='small'
				scroll={{ x: 615 }}
				pagination={{ position: ['bottomCenter'] }}
				getPopupContainer={() => tableRef.current} 
			/>
		</div>
		</>
	);
};
