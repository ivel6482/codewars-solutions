function remainder(a, b) {
	// Divide the larger argument by the smaller argument and return the remainder
	return Math.min(a, b) === 0 ? NaN : Math.max(a, b) % Math.min(a, b)
}
