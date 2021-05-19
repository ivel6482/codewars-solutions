function removeExclamationMarks(s) {
	return s
		.split('')
		.filter((s) => s !== '!')
		.join('')
}
