function correctPolishLetters(string) {
	// your code
	return string
		.split('')
		.map((letter) => {
			switch (letter) {
				case 'ą':
					return 'a'
				case 'ć':
					return 'c'
				case 'ę':
					return 'e'
				case 'ł':
					return 'l'
				case 'ń':
					return 'n'
				case 'ó':
					return 'o'
				case 'ś':
					return 's'
				case 'ź':
				case 'ż':
					return 'z'
				default:
					return letter
			}
		})
		.join('')
}
