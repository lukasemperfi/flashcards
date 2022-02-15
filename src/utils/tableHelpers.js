export const getProgressPercent = (correct, repeat) => Math.round((correct * 100) / repeat) || 0

export const getProgressBarColor = (percent) => {
	if (percent < 50) { return '#ff4d4f' }
	if (percent > 49 && percent < 66) { return '#faad14' }
	if (percent > 65) { return '#00a82d' }
}

export const getCardsDoneNumber = (cards) => {
	return cards.filter(card => {
		const progress = getProgressPercent(card?.statistics?.correct, card?.statistics?.repeat)
		return progress > 65
	}).length
}

export const isFiltersActive = (filters) => {
	const { selectedRowKeys, filteredInfo, sortedInfo, paginationPage } = filters
	const isFilteredActive = filteredInfo !== null && Object.values(filteredInfo).some(filter => filter !== null)
	const isSortedActive = sortedInfo !== null && sortedInfo.column !== undefined
	if (selectedRowKeys.length > 0 || isFilteredActive || isSortedActive || paginationPage > 1) {
		return true
	}
	return false
}

export const getTableData = (cards) => {
	return cards.map(card => {
		const progress = getProgressPercent(card?.statistics?.correct, card?.statistics?.repeat)
		return { ...card, key: card.id, statistics: { ...card?.statistics, progress } }
	})
}
