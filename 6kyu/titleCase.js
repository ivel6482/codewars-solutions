function titleCase(title, minorWords) {
	const ommit = minorWords
		? minorWords.split(' ').map((word) => word.toLowerCase())
		: []
	console.log(ommit)
	return title
		.split(' ')
		.map((word, index) => {
			if (word.length > 0) {
				return !ommit.includes(word.toLowerCase()) || index === 0
					? word[0].toUpperCase() + word.toLowerCase().slice(1)
					: word.toLowerCase()
			} else {
				return ''
			}
		})
		.join(' ')
}
