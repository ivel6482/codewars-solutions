function fiveLine(s) {
	//coding here...
	let clear = s.trim()
	let string = ''
	for (let i = 1; i <= 5; i++) {
		if (i === 5) {
			string += clear.repeat(i)
		} else {
			string += clear.repeat(i) + '\n'
		}
	}
	return string
}
