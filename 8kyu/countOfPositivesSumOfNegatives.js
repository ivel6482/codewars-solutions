function countPositivesSumNegatives(input) {
	return input == null || input.length === 0
		? []
		: [
				input.filter((num) => num > 0).length,
				input.reduce(
					(acc, num) => (num < 0 ? acc - num * Math.sign(num) : acc),
					0
				),
		  ]
}
