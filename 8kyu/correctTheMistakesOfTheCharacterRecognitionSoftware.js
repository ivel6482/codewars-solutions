function correct(string) {
	// your code here
	return string
		.split('')
		.map((char) =>
			char === '5' ? 'S' : char === '0' ? 'O' : char === '1' ? 'I' : char
		)
		.join('')
}
