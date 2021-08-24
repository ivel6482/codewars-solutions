function findLongest(array) {
	// code here
	const lengths = array.map((el) => el.toString().length)
	const longest = lengths.indexOf(Math.max(...lengths))
	return array[longest]
}
