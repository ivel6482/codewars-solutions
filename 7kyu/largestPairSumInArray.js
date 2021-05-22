function largestPairSum(numbers) {
	//TODO: Write your Code here
	numbers.sort((a, b) => {
		if (a < b) {
			return -1
		}
		if (a > b) {
			return 1
		}
		return 0
	})
	const toSum = numbers.slice(-2)
	return toSum.reduce((acc, num) => acc + num, 0)
}
