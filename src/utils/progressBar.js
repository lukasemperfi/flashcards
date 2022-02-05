

export const progressBarColor = (percent, options) => {
	const defaultOptions = {
		colors: ['', '', ''],
		range: [0, [0, 0], 0]
	}
	percent = typeof percent !== 'number' ? 0 : percent
	// const {colors, range} = options
	// const [bad, good, excellent] = colors
	console.log(percent)
	// if(percent < 50) {
	// 	return colors[0]
	// }
	// if(percent > 49 && percent < 66) {
	// 	return colors[1]
	// }
	// if(percent > 65) {
	// 	return colors[2]
	// }
}


const options = {
	colors: ['red', 'orange', 'green'],
	range: [50, [49, 65], 66]
}

progressBarColor(10)