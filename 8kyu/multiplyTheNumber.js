function multiply(number) {
	//your code here
	const length = String(number).startsWith('-')
		? String(number).length - 1
		: String(number).length
	return Math.pow(5, length) * number
}
