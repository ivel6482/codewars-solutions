function closeCompare(a, b, margin = 0) {
	const diff = Math.abs(a - b)
	console.log({ a, b, margin, diff })
	// ...
	if (margin >= diff) {
		return 0
	} else if (a < b) {
		return -1
	} else if (a > b) {
		return 1
	}
}
