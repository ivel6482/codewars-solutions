'use strict'

function flattenAndSort(array) {
	// Good luck, brave code warrior!
	const res = []

	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array[i].length; j++) {
			res.push(array[i][j])
		}
	}

	return res.sort((a, b) => a - b)
}
