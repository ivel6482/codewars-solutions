var flatten = function (array) {
	// TODO: Program me
	const res = []
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			for (let j = 0; j < array[i].length; j++) {
				res.push(array[i][j])
			}
		} else {
			res.push(array[i])
		}
	}
	return res
}
