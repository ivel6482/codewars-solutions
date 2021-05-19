function cutIt(arr) {
	//coding here...
	let lengths = []

	arr.forEach((string) => lengths.push(string.length))

	let minLength = Math.min(...lengths)

	return arr.map((string) => string.substring(0, minLength))
}
