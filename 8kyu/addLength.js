function addLength(str) {
	//start-here
	return str.split(' ').map((str) => `${str} ${str.length}`)
}
