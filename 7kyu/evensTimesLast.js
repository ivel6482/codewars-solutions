function evenLast(numbers) {
	// Good luck
	if (numbers.length > 0) {
		return (
			numbers.reduce((acc, num, i) => (i % 2 === 0 ? acc + num : acc), 0) *
			numbers[numbers.length - 1]
		)
	} else {
		return 0
	}
}
