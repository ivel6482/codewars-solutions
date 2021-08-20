function predictAge(...ages) {
	// your code
	const total = ages.map((age) => age * age).reduce((acc, num) => acc + num, 0)
	return Math.floor(Math.sqrt(total) / 2)
}
