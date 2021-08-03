function dbSort(a) {
	// Code here
	const numbers = a.filter((el) => typeof el === 'number')
	const strings = a.filter((el) => typeof el === 'string')
	numbers.sort((a, b) => a - b)
	strings.sort()
	return [...numbers, ...strings]
}
