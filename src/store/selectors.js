import { createSelector } from "@reduxjs/toolkit";
const defaultCardSet = {}


export const selectAll = state => state.cardSets

export const selectCardSets = state => selectAll(state).cardSets

export const selectFirstCardsSetId = state => selectCardSets(state)[0]?.id

export const selectLastCardsSetId = state => {
	const cardSets = selectCardSets(state)
	return cardSets[cardSets.length - 1]?.id
}

export const selectSearchedCardSets = (state, query) => {
	// console.log('rendered CardSets selector')
	return selectCardSets(state).filter(cardSet => cardSet.title.toLowerCase().includes(query.toLowerCase()))
}

export const selectCardSetById = (state, id) => {
	// console.log('rendered cardSetId selector')
	return selectCardSets(state).find(cardSet => cardSet.id === id) || defaultCardSet
}

export const selectCardById = (state, kitId, cardId) => {
	return selectCardSetById(state, kitId)?.cards.find(card => card.id === cardId)
}

