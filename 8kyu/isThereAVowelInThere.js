function isVow(a) {
	const vowels = 'aeiou'
	const codes = []
	for (let i = 0; i < vowels.length; i++) {
		codes.push(vowels.charCodeAt(i))
	}
	return a.map((vowel) => {
		if (codes.find((code) => code === vowel)) {
			return String.fromCharCode(vowel)
		} else {
			return vowel
		}
	})
}
