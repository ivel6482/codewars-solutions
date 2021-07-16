function stringClean(s) {
	// Function will return the cleaned string
	return [...s]
		.filter((char) => {
			const exclude = '1234567890'
			return !exclude.includes(char)
		})
		.join('')
}
