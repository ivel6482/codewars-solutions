function logicalCalc(array, op) {
	//your code here
	if (op === 'AND') {
		return array.every((el) => {
			return el === true
		})
	} else if (op === 'OR') {
		return array.some((el) => {
			return el === true
		})
	} else {
		return array.reduce((acc, el) => acc != el, false)
	}
}
