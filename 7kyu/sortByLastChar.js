function last(x) {
	return x.split(' ').sort((a, b) => a.slice(-1) > b.slice(-1))
}
