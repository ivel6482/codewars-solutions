function accum(s) {
	// your code
	return [...s]
		.map((char, i) => char.toUpperCase() + char.repeat(i).toLowerCase())
		.join('-')
}
