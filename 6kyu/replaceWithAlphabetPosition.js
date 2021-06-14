function alphabetPosition(text) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	return text
		.split('')
		.reduce((acc, char) => {
			if (alphabet.includes(char.toLowerCase())) {
				return acc + (alphabet.indexOf(char.toLowerCase()) + 1) + ' '
			} else {
				return acc
			}
		}, '')
		.trim()
}
