import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialValue = [
	{
		id: '1',
		title: 'JavaScript',
		cards: [
			{
				id: 'C1', 
				question: 'Какие бывают типы данных в JS ?',
				answer: '<pre><code class="language-javascript">console.log( 8 % 3 );</code></pre>',
				tags: ['data', 'string'],
				statistics: {
					repeat: 5,
					correct: 2,
					notCorrect: 3
				}
			},
			{
				id: 'C2',
				question: 'Что такое чистые компоненты?',
				answer: '<pre><code class="language-javascript">    useEffect(() =&gt; { hljs.highlightAll()}, [])</code></pre>',
				tags: ['number',],
				statistics: {
					repeat: 4,
					correct: 4,
					notCorrect: 0
				}
			},
			{
				id: 'C3',
				question: 'Когда использовать компонент класса вместо функционального компонента?',
				answer: 'Если компоненту нужны методы состояния или жизненного цикла, используйте компонент класса, в противном случае используйте компонент функции. Однако, начиная с React 16.8 с добавлением хуков, вы можете использовать состояние, методы жизненного цикла и другие функции, которые были доступны только в компоненте класса, прямо в компоненте функции.',
				tags: [],
				statistics: {
					repeat: 90,
					correct: 56,
					notCorrect: 44
				}
			},
			{
				id: 'C4',
				question: 'Когда использовать  компонента?',
				answer: 'Если комнт класса, в противном случае используйте компонент функции. Однако, начиная с React 16.8 с добавлением хуков, вы можете использовать состояние, методы жизненного цикла и другие функции, которые были доступны только в компоненте класса, прямо в компоненте функции.',
				tags: [],
				statistics: {
					repeat: 6,
					correct: 6,
					notCorrect: 0
				}
			}
		]
	},
	{
		id: '2',
		title: 'React',
		cards: [
			{
				id: 'b2',
				question: 'Что такое состояние в React?',
				answer: 'Состояние компонента — это объект, который содержит некоторую информацию, которая может измениться в течение срока службы компонента. Мы всегда должны стараться сделать наше состояние максимально простым и свести к минимуму количество компонентов с состоянием.',
				tags: ['data', 'string'],
				statistics: {
					repeat: 10,
					correct: 7,
					notCorrect: 3
				}
			}
		]
	},
	{
		id: '3',
		title: 'NodeJS',
		cards: []
	},
]

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
			console.log(kitId, cardId, question, answer);
			const existingCard = state.cardSets.find(set => set.id === kitId).cards.find(card => card.id === cardId)
			if (existingCard) {
				existingCard.question = question
				existingCard.answer = answer
			}
		},
		updateCardStatistics(state, action) {
			const { kitId, cardId, resultName} = action.payload
			console.log(kitId, cardId, resultName);
			const existingCard = state.cardSets.find(set => set.id === kitId).cards.find(card => card.id === cardId)
			if (existingCard) {
				existingCard.statistics.repeat += 1 
				existingCard.statistics[resultName] += 1 
			}
		},

	}
})

export const { addSet, deleteSet, addSetFromCardsList, deleteCardsFromSet, addCard, updateCard, updateCardStatistics } = cardSetsSlice.actions

export default cardSetsSlice.reducer
