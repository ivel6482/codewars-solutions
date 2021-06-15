function arr2bin(arr) {
	// show me the code
	if (arr.includes(NaN)) {
		return 'NaN'
	}
	return arr
		.reduce(
			(acc, num) =>
				isNaN(num) ||
				typeof num === 'boolean' ||
				typeof num === NaN ||
				Array.isArray(num)
					? acc
					: acc + num,
			0
		)
		.toString(2)
}
