var hotpo = function (n) {
	let count = []
	let number = n
	while (number !== 1) {
		if (number % 2 === 0) {
			count.push(number / 2)
			number = number / 2
		} else {
			count.push(3 * number + 1)
			number = 3 * number + 1
		}
	}
	return count.length
}
