function sortVowels(s) {
	//code
	if (typeof s === 'number' || !s) {
		return ''
	} else {
		const characters = s.split('')
		const formattedCharacters = characters.map((character) => {
			const vowels = ['a', 'e', 'i', 'o', 'u']
			if (vowels.includes(character.toLowerCase())) {
				return '|' + character + '\n'
			} else {
				return character + '|' + '\n'
			}
		})
		return formattedCharacters.join('').slice(0, -1)
	}
}
