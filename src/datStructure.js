const data = [
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
		id: '4',
		title: 'fgjh',
		cards: [
			{
				id: 'C31', 
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
				id: 'C32',
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
				id: 'C33',
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
				id: 'C334',
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
	// {
	// 	id: '3',
	// 	title: 'NodeJS',
	// 	cards: []
	// },
]

// {"cardSets":[{"id":"ld9VzHD1Mm2f75Sx3aCb8","title":"JavaScript(demo)","cards":[{"id":"XfCX2bmfQ3MtLE_N-ejkR","question":"В чем разница между let, const и var?","answer":"<p style=\"margin-left:0px;\"><strong>var</strong></p><ul><li style=\"margin-left:0px;\">поднимается в начало области видимости функции при компиляции</li><li style=\"margin-left:0px;\">объявляет переменную, которая может быть перезаписана</li><li style=\"margin-left:0px;\">объявляет переменную, которая может быть переопределена</li></ul><p style=\"margin-left:0px;\"><strong>let</strong></p><ul><li style=\"margin-left:0px;\">поднимается в начало области видимости блока при компиляции</li><li style=\"margin-left:0px;\">объявляет переменную, которая может быть перезаписана</li><li style=\"margin-left:0px;\">объявляет переменную, которая не может быть переопределена</li></ul><p style=\"margin-left:0px;\"><strong>const</strong></p><ul><li style=\"margin-left:0px;\">поднимается в начало области видимости блока при компиляции</li><li style=\"margin-left:0px;\">объявляет переменную, которая не может быть перезаписана или переопределена</li></ul>","statistics":{"repeat":1,"correct":1,"notCorrect":0}},{"id":"B7-gPBk5lX7w74P1hAdBA","question":"Что делает оператор &amp;&amp;?","answer":"<p>Логический &amp;&amp; оператор находит первое ложное выражение в своих операндах и возвращает его, а если не находит ложного выражения, возвращает последнее выражение.&nbsp;</p><pre><code class=\"language-javascript\">console.log(false &amp;&amp; 1 &amp;&amp; []); //logs false\nconsole.log(' ' &amp;&amp; true &amp;&amp; 5); //logs 5</code></pre>","statistics":{"repeat":1,"correct":1,"notCorrect":0}},{"id":"1OC1WfQXU-AJOGOlmrMvZ","question":"Как можно клонировать объект?","answer":"<p style=\"margin-left:0px;\">Можно использовать оператор остатка ....</p><p style=\"margin-left:0px;\">Можно использовать Object.assign(newObj, oldObj).</p><p style=\"margin-left:0px;\">Но эти подходы не позволяют выполнить глубокое клонирование. Поэтому, если нам нужно клонировать объект со вложенными объектами, мы можем использовать либо метод какой-либо библиотеки ( lodash), либо сделать это средствами встроенного объекта JSON.</p><pre><code class=\"language-javascript\">JSON.parse(JSON.stringify(objectToClone))</code></pre>","statistics":{"repeat":1,"correct":0,"notCorrect":1}},{"id":"s1TOh0VDkgOUWcHTZ9pXo","question":"Как можно добавить элемент в начало и в конец массива?","answer":"<p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">Чтобы добавить элемент в начало массива, можно использовать&nbsp;</span></p><pre><code class=\"language-javascript\">Array.prototype.unshift(). </code></pre><p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">Для добавления элемента в конец массива подойдет&nbsp;</span></p><pre><code class=\"language-javascript\">Array.prototype.push().</code></pre>","statistics":{"repeat":1,"correct":1,"notCorrect":0}},{"id":"LxwHbnRNqWLG1yHOhALOm","question":"В чем разница между == и ===?","answer":"<p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">Оператор двойного равенства производит приведение типов, оператор строгого равенства - нет.</span></p>","statistics":{"repeat":1,"correct":1,"notCorrect":0}},{"id":"fhNz5QPx2Hv8jYsClLSbB","question":"Что такое DOM?","answer":"<p style=\"margin-left:0px;\">DOM - Document Object Model (объектная модель документа). Другими словами, это дерево всех узлов страницы, которые распознал браузер в процессе обработки HTML-разметки.</p><p style=\"margin-left:0px;\">DOM - это интерфейс, позволяющий JavaScript-коду взаимодействовать с шаблоном.</p>","statistics":{"repeat":1,"correct":1,"notCorrect":0}},{"id":"icruzrqusWEWtWU3QY9Ld","question":"Что такое функции высшего порядка?","answer":"<p><strong>Функции высшего порядка</strong> — это функции, которые могут возвращать функцию или получать аргумент или аргументы, которые имеют значение функции.</p><pre><code class=\"language-javascript\">function higherOrderFunction(param, callback) {\n  return callback(param);\n}</code></pre>","statistics":{"repeat":1,"correct":1,"notCorrect":0}},{"id":"bhC4XfDvcwQ9LsMCaJrXp","question":"В чем разница между null и undefined?","answer":"<p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\"><strong>undefined </strong>(«неопределенный») представляет собой значение по умолчанию:</span><br>&nbsp;</p><ul style=\"list-style-type:disc;\"><li>переменной, которой не было присвоено значения, т.е. объявленной, но не инициализированной переменной;</li><li>функции, которая ничего не возвращает явно, например, console.log(1);</li><li>несуществующего свойства объекта.</li></ul><p><br><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">В указанных случаях движок JS присваивает значение undefined.</span><br>&nbsp;</p><pre><code class=\"language-javascript\">let _thisIsUndefined\nconst doNothing = () =&gt; {}\nconst someObj = {\n    a: 'ay',\n    b: 'bee',\n    c: 'si'\n}\nconsole.log(_thisIsUndefined) // undefined\nconsole.log(doNothing()) // undefined\nconsole.log(someObj['d']) // undefined</code></pre><p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\"><strong>null </strong>— это «значение отсутствия значения». null — это значение, которое присваивается переменной явно. В примере ниже мы получаем null, когда метод fs.readFile отрабатывает без ошибок:</span><br><br>&nbsp;</p><pre><code class=\"language-javascript\">fs.readFile('path/to/file', (e, data) =&gt; {\n    console.log(e) // здесь мы получаем null\nif(e) {\n    console.log(e)\n}\n    console.log(data)\n})</code></pre><p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">При сравнении null и undefined мы получаем true, когда используем оператор \"==\", и false при использовании оператора \"===\".&nbsp;</span><br>&nbsp;</p><pre><code class=\"language-javascript\">console.log(null == undefined) // true\nconsole.log(null === undefined) // false</code></pre>","statistics":{"repeat":0,"correct":0,"notCorrect":0}},{"id":"MsxrxLO9KuChBeN1t5JED","question":"В чем разница между методами event.preventDefault() и event.stopPropagation()?","answer":"<p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">Метод event.preventDefault() отключает поведение элемента по умолчанию. Если использовать этот метод в элементе form, то он предотвратит отправку формы (submit). Если использовать его в contextmenu, то контекстное меню будет отключено (данный метод часто используется в keydown для переопределения клавиатуры, например, при создании музыкального/видео плеера или текстового редактора — прим. пер.). Метод event.stopPropagation() отключает распространение события (его всплытие или погружение).</span></p>","statistics":{"repeat":0,"correct":0,"notCorrect":0}},{"id":"ah4GJahNeZcO7NVM8R9lu","question":"Почему результатом сравнения двух похожих объектов является false?","answer":"<pre><code class=\"language-javascript\">let a = {\n    a: 1\n}\nlet b = {\n    a: 1\n}\nlet c = a\n\nconsole.log(a === b) // false\nconsole.log(a === c) // true хм...\n</code></pre><p><br><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">В JS объекты и примитивы сравниваются по-разному. Примитивы сравниваются по значению. Объекты — по ссылке или адресу в памяти, где хранится переменная. Вот почему первый console.log возвращает false, а второй — true. Переменные «a» и «c» ссылаются на один объект, а переменные «a» и «b» — на разные объекты с одинаковыми свойствами и значениями.</span></p>","statistics":{"repeat":0,"correct":0,"notCorrect":0}},{"id":"AS8ykl3nZQxMh_l-jSJqI","question":"Для чего используется оператор \"!!\"?","answer":"<p><span style=\"background-color:rgb(255,255,255);color:rgb(17,17,17);\">Оператор \"!!\" (двойное отрицание) приводит значение справа от него к логическому значению.</span></p><pre><code class=\"language-javascript\">console.log(!!null) // false\nconsole.log(!!undefined) // false\nconsole.log(!!'') // false\nconsole.log(!!0) // false\nconsole.log(!!NaN) // false\nconsole.log(!!' ') // true\nconsole.log(!!{}) // true\nconsole.log(!![]) // true\nconsole.log(!!1) // true\nconsole.log(!![].length) // false</code></pre>","statistics":{"repeat":0,"correct":0,"notCorrect":0}}]}]}