var capitals = function (word) {
	// Write your code here
	const res = []
	word.split('').forEach((char, i) => {
		if (char === char.toUpperCase()) {
			res.push(i)
		}
	})
	return res
}
