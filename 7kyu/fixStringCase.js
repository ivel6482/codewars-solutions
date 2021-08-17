function solve(s) {
	//..
	const cache = {
		upper: 0,
		lower: 0,
	}

	s.split('').forEach((char) => {
		if (char === char.toUpperCase()) {
			cache.upper++
		} else {
			cache.lower++
		}
	})

	const { upper, lower } = cache

	return upper === lower || lower > upper ? s.toLowerCase() : s.toUpperCase()
}
