Array.prototype.filter = function (func) {
	//nothing here, you will feel pretty awesome to write down by yourself
	//have fun :)
	let arr = []
	for (let i = 0; i < this.length; i++) {
		if (func(this[i])) {
			arr.push(this[i])
		}
	}
	return arr
}
