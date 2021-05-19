function squareOrSquareRoot(array) {
	return array.map((num) =>
		!Number.isInteger(Math.sqrt(num)) ? num * num : Math.sqrt(num)
	)
}
