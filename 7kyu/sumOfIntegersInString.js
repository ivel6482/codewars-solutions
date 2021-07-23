function sumOfIntegersInString(s) {
	return s.match(/\d+/g) == null
		? 0
		: s.match(/\d+/g).reduce((acc, num) => acc + +num, 0)
}
