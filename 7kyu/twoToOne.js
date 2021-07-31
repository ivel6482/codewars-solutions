function longest(s1, s2) {
	const arr = [...s1, ...s2]
	return [...new Set(arr)].sort().join('')
}
