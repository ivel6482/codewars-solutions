function repeats(arr) {
	//..
	const nonUnique = arr
		.sort((a, b) => a - b)
		.filter((num, i, arr) => num === arr[i + 1])
	const unique = arr.filter((num) => !nonUnique.includes(num))
	return unique.reduce((acc, num) => acc + num, 0)
}

function repeats(arr) {
	return arr
		.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v))
		.reduce((a, b) => a + b, 0)
}
