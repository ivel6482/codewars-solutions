function expressionMatter(a, b, c) {
	const totals = [a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c]
	return Math.max(...totals)
}
