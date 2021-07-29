function sortArray(array) {
	// We sort after filter because that will sort the returned array from filter and not the original array.
	let odds = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b)
	return array.map((num, i, arr) => (num % 2 === 0 ? num : odds.shift()))
}
