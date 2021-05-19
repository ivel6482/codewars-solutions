function aliasGen(name1, name2) {
	// Code Here
	const regex = /\b[A-Z]/gi
	if (name1.search(regex) < 0 || name2.search(regex) < 0) {
		return 'Your name must start with a letter from A - Z.'
	} else {
		return `${firstName[name1[0].toUpperCase()]} ${
			surname[name2[0].toUpperCase()]
		}`
	}
}
