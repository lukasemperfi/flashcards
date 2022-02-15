import { useState } from "react"


import { success } from "./tableRenderElements"

import { deleteCardsFromSet } from '../../store/cardSetsSlice';
import { useDispatch } from "react-redux";
import { getTableData, isFiltersActive } from "../../utils/tableHelpers";


export const useTableFilters = (cardSetId, cards) => {
	const [filters, setFilters] = useState({
		selectedRowKeys: [],
		filteredInfo: null,
		sortedInfo: null,
		paginationPage: 1,
	})
	const dispatch = useDispatch()


	// Search Filter
	const columnsSearchFilter = (value, record) => record?.question.toString().toLowerCase().includes(value.toLowerCase())
	const searchFilter = {
		filteredValue: filters.filteredInfo?.question || null,
		onFilter: columnsSearchFilter,
	}

	// Sort Filter
	const columnsSortNumberFilter = (a, b) => a.statistics.repeat - b.statistics.repeat
	const sortFilter = {
		sortOrder: filters.sortedInfo?.columnKey === 'repeat' && filters.sortedInfo.order,
		sorter: columnsSortNumberFilter,
	}

	// progress Filter
	const columnsProgressFilter = (value, record) => {
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
	const progressFilter = {
		filteredValue: filters.filteredInfo?.progress || null,
		onFilter: columnsProgressFilter,
	}

	// pafination Filter
	const onChangePagination = (page, pageSize) => setFilters({ ...filters, paginationPage: page })
	const current = filters.paginationPage

	// rowFilters
	const selectedRowKeysFilter = filters.selectedRowKeys
	const onChangeRow = (selectedRowKeys, selectedRows) => {
		setFilters({ ...filters, selectedRowKeys })
	}

	const selectAllRows = () => setFilters({ ...filters, selectedRowKeys: getTableData(cards).map(row => row.key) })
	const clearAllRows = () => setFilters({ ...filters, selectedRowKeys: [] })
	const deleteCardsFromCardsKit = () => {
		if (filters.selectedRowKeys.length > 0) {
			dispatch(deleteCardsFromSet({ kitId: cardSetId, cardsId: filters.selectedRowKeys }))
			setFilters({ ...filters, selectedRowKeys: [] })
			success()
		}
	}


	const onChangeTable = (pagination, tableFilters, sorter) => {
		setFilters({ ...filters, filteredInfo: tableFilters, sortedInfo: sorter })
	}

	const clearAllFilters = () => {
		if (isFiltersActive(filters)) {
			setFilters({
				selectedRowKeys: [],
				filteredInfo: null,
				sortedInfo: null,
				paginationPage: 1,
			})
		}
	}

	const columnsFilters = {
			searchFilter,
			sortFilter,
			progressFilter,
	}

	const rowFilters = {
		selectedRowKeys: selectedRowKeysFilter,
		onChange: onChangeRow,
	}

	const rowSelectionFilters = {
		selectAllRows,
		clearAllRows,
		deleteCardsFromCardsKit
	}

	const paginationFilters = {
		current: current,
		onChange: onChangePagination,
	}

	return {
		filters,
		columnsFilters,
		rowFilters,
		rowSelectionFilters,
		paginationFilters,
		onChangeTable,
		clearAllFilters,
	}

} 

