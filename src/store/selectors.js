export const selectAll = state => state.cardSets

export const selectCardSets = state => selectAll(state).cardSets

export const selectFirstCardsSetId = state => selectCardSets(state)[0]?.id
export const selectSecondCardsSetId = state => selectCardSets(state)[1]?.id

export const selectLastCardsSetId = state => {
	const cardSets = selectCardSets(state)
	return cardSets[cardSets.length - 1]?.id
}

export const selectSearchedCardSets = (state, query) => {
	return selectCardSets(state).filter(cardSet => cardSet.title.toLowerCase().includes(query.toLowerCase()))
}

export const selectCardSetById = (state, id) => {
	return selectCardSets(state).find(cardSet => cardSet.id === id)
}

export const selectCardById = (state, kitId, cardId) => {
	return selectCardSetById(state, kitId)?.cards.find(card => card.id === cardId)
}

export const selectIsCardsSetExist = (state, cardSetId) => selectCardSetById(state, cardSetId) !== undefined

export const selectCardsById = (state, cardSetId, cardsId) => {
	const cards = selectCardSetById(state, cardSetId).cards
	return cards.filter(card => cardsId.some(id => card.id === id))
}