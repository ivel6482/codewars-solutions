function oddOrEven(array) {
	//enter code here
	const total = array.reduce((acc, num) => num + acc, 0)
	return total % 2 === 0 ? 'even' : 'odd'
}
