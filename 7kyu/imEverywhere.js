function i(word) {
	//..
	if (
		word === '' ||
		word[0] === word[0].toLowerCase() ||
		word.startsWith('I')
	) {
		return 'Invalid word'
	} else {
		const vowels = ['a', 'e', 'i', 'o', 'u']

		const charMap = {
			vowels: 0,
			consonants: 0,
		}

		for (let char of word.toLowerCase()) {
			if (vowels.includes(char)) {
				charMap.vowels++
			} else {
				charMap.consonants++
			}
		}

		return charMap.vowels >= charMap.consonants ? 'Invalid word' : 'i' + word
	}
}
