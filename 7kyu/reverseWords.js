function reverseWords(str) {
	// Go for it
	return str
		.split(' ')
		.map((w) => w.split('').reverse().join(''))
		.join(' ')
}
