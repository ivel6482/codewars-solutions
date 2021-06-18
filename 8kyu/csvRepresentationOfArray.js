function toCsvText(array) {
	// good luck
	return (stringArr = array
		.map((arr) => {
			return arr.map((el, index, arr) => {
				return index === arr.length - 1 ? el + '\n' : el
			})
		})
		.toString()
		.split('\n,')
		.join('\n')
		.slice(0, -1))
	//   return array.join('\n')
}
