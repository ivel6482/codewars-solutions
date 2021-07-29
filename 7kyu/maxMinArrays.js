function solve(arr) {
	//..
	let res = []
	arr.sort((a, b) => a - b)
	while (arr.length) {
		res.push(arr.pop())
		if (arr.length) {
			res.push(arr.shift())
		}
	}

	return res
}
