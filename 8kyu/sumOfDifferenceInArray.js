function sumOfDifferences(arr) {
	const sorted = arr.sort((a, b) => b - a)
	const sum = sorted.map((num, i, array) => num - array[i + 1])
	sum.pop()
	return sum.reduce((acc, num) => acc + num, 0)
}
