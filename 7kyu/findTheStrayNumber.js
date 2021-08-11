function stray(numbers) {
	const cache = {}

	numbers.forEach((num) => {
		if (cache[num]) {
			cache[num]++
		} else {
			cache[num] = 1
		}
	})

	for (const [key, value] of Object.entries(cache)) {
		if (value === 1) return +key
	}
}
