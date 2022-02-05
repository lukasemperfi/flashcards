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
	},
]

const initialValue = [
	{
		id: 1,
		title: 'JavaScript',
		cards: [
			{
				id: 'C1',
				question: 'Какие бывают типы данных в JS ?',
				answer: 'number, string, object, boolean, null, undefined, bigint, symbol',
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
				answer: 'React.PureComponentточно такой же, как React.Componentза исключением того, что он обрабатывает shouldComponentUpdate()метод для вас. При изменении реквизита или состояния PureComponent будет выполнять поверхностное сравнение как реквизита, так и состояния. Компонент , с другой стороны, не будет сравнивать текущие реквизиты и состояние со следующими из коробки. Таким образом, компонент будет перерисовываться по умолчанию всякий раз , когда shouldComponentUpdateвызывается.',
				tags: ['number',],
				statistics: {
					repeat: 3,
					correct: 1,
					notCorrect: 2
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
			}
		]
	},
	{
		id: 2,
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
		id: 3,
		title: 'NodeJS',
		cards: []
	},
]