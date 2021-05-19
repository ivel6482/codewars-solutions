function remove(s) {
	//coding and coding....
	return s
		.split('')
		.filter((el, i, arr) => {
			if (i === 0 && el === '!') {
				return el
			} else if (el === '!' && arr[i + 1] === ' ') {
				return el
			} else {
				return el !== '!'
			}
		})
		.join('')
}
