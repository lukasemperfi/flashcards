import { createSlice, nanoid } from '@reduxjs/toolkit'
import { initialValue } from './initialValue'


const cardSetsSlice = createSlice({
	name: 'cardSets',
	initialState: {
		cardSets: initialValue,
	},
	reducers: {
		addSet: {
			reducer: (state, action) => {
				state.cardSets.push(action.payload)
			},
			prepare: ({ title }) => {
				const id = nanoid()
				return {
					payload: {
						id,
						title,
						cards: [],
					}
				}
			},
		},
		addSetFromCardsList: { 
			reducer: (state, action) => {
				state.cardSets.push(action.payload)
			},
			prepare: ({ title, cards }) => {
				const id = nanoid()
				return {
					payload: {
						id,
						title,
						cards: cards || [],
					}
				}
			},
		},
		renameSet(state, action) {
			const { kitId, newTitle } = action.payload
			const existingSet = state.cardSets.find(set => set.id === kitId)
			if (existingSet) {
				existingSet.title = newTitle
			}
		},		
		deleteSet(state, action) {
			state.cardSets = state.cardSets.filter(set => set.id !== action.payload.id)
		},
		addCard(state, action) {
			const { kitId, card } = action.payload
			const existingSet = state.cardSets.find(set => set.id === kitId)
			if (existingSet) {
				existingSet.cards.push(card)
			}
		},
		deleteCardsFromSet(state, action) {
			const { kitId, cardsId } = action.payload
			const existingSet = state.cardSets.find(set => set.id === kitId)
			if (existingSet) {
				existingSet.cards = existingSet.cards.filter(card => !cardsId.some(id => id === card.id))
			}
		},
		updateCard(state, action) {
			const { kitId, cardId, question, answer } = action.payload
			const existingCard = state.cardSets.find(set => set.id === kitId).cards.find(card => card.id === cardId)
			if (existingCard) {
				existingCard.question = question
				existingCard.answer = answer
			}
		},
		updateCardStatistics(state, action) {
			const { kitId, cardId, resultName} = action.payload
			const existingCard = state.cardSets.find(set => set.id === kitId).cards.find(card => card.id === cardId)
			if (existingCard) {
				existingCard.statistics.repeat += 1 
				existingCard.statistics[resultName] += 1 
			}
		},

	}
})

export const { 
	addSet,
	renameSet, 
	deleteSet, 
	addSetFromCardsList, 
	deleteCardsFromSet, 
	addCard, 
	updateCard, 
	updateCardStatistics 
} = cardSetsSlice.actions

export default cardSetsSlice.reducer
