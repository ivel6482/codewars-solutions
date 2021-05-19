function firstToLast(str, c) {
	//coding here..
	let firstOcurrance = str.indexOf(c)
	let lastOcurrance = str.lastIndexOf(c)
	return firstOcurrance === -1 && lastOcurrance === -1
		? -1
		: lastOcurrance - firstOcurrance
}
