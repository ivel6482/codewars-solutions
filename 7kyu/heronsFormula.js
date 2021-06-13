function heron(a, b, c) {
	const s = (a + b + c) / 2
	const formula = s * (s - a) * (s - b) * (s - c)
	return Math.sqrt(formula)
}
