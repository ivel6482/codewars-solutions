function remove(s, n) {
	//coding and coding....
	let count = 1
	let arr = [...s]
	let result = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '!' && count <= n) {
			result.push(arr[i].replace('!', ''))
			count += 1
		} else {
			result.push(arr[i])
		}
	}
	return result.join('')
}
