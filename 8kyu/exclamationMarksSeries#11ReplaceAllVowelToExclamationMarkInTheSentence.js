function replace(s) {
	//coding and coding....
	return [...s]
		.map((char) => ('aeiouAEIOU'.includes(char) ? '!' : char))
		.join('')
}
