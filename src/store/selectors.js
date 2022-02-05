import { createSelector } from "@reduxjs/toolkit";
const defaultCardSet = {}


export const selectAll = state => state.cardSets

export const selectCardSets = state => selectAll(state).cardSets

export const selectSearchedCardSets = (state, query) => {
	// console.log('rendered CardSets selector')
	return selectCardSets(state).filter(cardSet => cardSet.title.toLowerCase().includes(query.toLowerCase()))
}

export const selectCardSetById = (state, id) => {
	// console.log('rendered cardSetId selector')
	return selectCardSets(state).find(cardSet => cardSet.id === id) || defaultCardSet
}


// export const selectCardsLength = state => selectAll(state).cardSets


// export const selectCardsTableData = (state, id) => {
// 	// console.log('rendered cardSetId selector')
// 	return 
// }
