function shorter_reverse_longer(a, b) {
	if (a.length === b.length || a.length > b.length) {
		return b.concat(a.split('').reverse().join(''), b)
	} else if (b.length > a.length) {
		return a.concat(b.split('').reverse().join(''), a)
	}
}
