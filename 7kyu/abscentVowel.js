function absentVowel(x) {
	const vowels = ['a', 'e', 'i', 'o', 'u']
	for (let i = 0; i < vowels.length; i++) {
		if (x.indexOf(vowels[i]) === -1) return vowels.indexOf(vowels[i])
	}
}
