function highAndLow(numbers) {
	// ...
	const nums = numbers.split(' ').map((strNum) => Number(strNum))
	const max = Math.max(...nums)
	const min = Math.min(...nums)
	return `${max} ${min}`
}
