function contamination(text, char) {
	// Code here ;)
	return text === '' || char === '' ? '' : char.repeat(text.length)
}
