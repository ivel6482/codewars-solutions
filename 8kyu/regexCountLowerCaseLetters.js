function lowercaseCount(str) {
	//How many?
	const count = str.match(/[a-z]/g)
	return count === null ? 0 : count.length
}
