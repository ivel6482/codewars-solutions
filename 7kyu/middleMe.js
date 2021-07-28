function middleMe(N, X, Y) {
	let result = ''
	if (N === 0) return X
	if (N % 2 > 0) return X
	for (let i = 1; i <= N + 1; i++) {
		if (i === N / 2) {
			result += `${Y}${X}`
		} else {
			result += Y
		}
	}
	return result.slice(0, -1)
}

function middleMe(N, X, Y) {
	const str = Y.repeat(N / 2)
	return N % 2 ? X : str + X + str
}
