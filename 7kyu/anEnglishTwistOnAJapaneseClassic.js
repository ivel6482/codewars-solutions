function shiritori(words) {
	//insert code
	const result = []
	for (let word of words) {
		if (words.indexOf(word) === 0) {
			result.push(word)
		} else {
			if (result[result.length - 1].endsWith(word[0])) {
				result.push(word)
			} else {
				break
			}
		}
	}

	return result[0] === '' ? [] : result
}
