function charFreq(message) {
	// awesome counter code
	const freq = {}
	message.split('').forEach((char) => {
		if (char === '?' || char === '(' || char === ')') {
			freq[char.toString()] = message.match(/\?|\(|\)/).length
		} else {
			const regex = new RegExp(char, 'g')
			freq[char.toString()] = message.match(regex).length
		}
	})
	return freq
}
