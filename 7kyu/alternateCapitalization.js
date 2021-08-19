function capitalize(s) {
	const even = []
	const odd = []

	s.split('').forEach((char, i) => {
		if (i % 2 === 0) {
			even.push(char.toUpperCase())
			odd.push(char.toLowerCase())
		} else {
			even.push(char.toLowerCase())
			odd.push(char.toUpperCase())
		}
	})

	return [even.join(''), odd.join('')]
}
