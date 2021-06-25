function vowelIndices(word) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'y']

	const arr = word.split('')

	const foundVowels = []

	for (let i = 0; i < arr.length; i++) {
		if (vowels.includes(arr[i].toLowerCase())) {
			foundVowels.push(i + 1)
		}
	}

	return foundVowels
}
