import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './cardSetsSlice'

export default configureStore({
	reducer: {
		cardSets: cardsReducer
	}
  })