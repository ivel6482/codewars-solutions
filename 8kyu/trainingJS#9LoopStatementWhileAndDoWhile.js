function padIt(str, n) {
	//coding here
	let padded = str.split('')
	let i = 1
	while (i <= n) {
		if (i % 2 === 0) {
			padded.push('*')
		} else {
			padded.unshift('*')
		}
		i++
	}
	return padded.join('')
}
