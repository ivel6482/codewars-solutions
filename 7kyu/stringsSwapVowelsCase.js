function swapVowelCase(str) {
	// your code here
	const vowels = 'aeiouAEIOU'
	return [...str]
		.map((char) => {
			if (vowels.includes(char)) {
				return char.toUpperCase() === char
					? char.toLowerCase()
					: char.toUpperCase()
			}
			return char
		})
		.join('')
}
