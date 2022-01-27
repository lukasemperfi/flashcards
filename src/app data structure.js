// Card
const card = {
	id: C1,
	question: 'Какие бывают типы данных в JS ?',
	answer: 'number, string, object, boolean, null, undefined, bigint, symbol',
	tags: ['data', 'string'],
	statistics: {
		repeat: 10,
		correct: 7,
		notCorrect: 3
	}
}

// List
const list = [
	{
		id: 1,
		title: 'JavaScript',
		cards: []
	}
]

// Structure
const structure = [
	{
		id: 1,
		title: 'JavaScript',
		cards: [
			{
				id: C1,
				question: 'Какие бывают типы данных в JS ?',
				answer: 'number, string, object, boolean, null, undefined, bigint, symbol',
				tags: ['data', 'string'],
				statistics: {
					repeat: 10,
					correct: 7,
					notCorrect: 3
				}
			}
		]
	}
]