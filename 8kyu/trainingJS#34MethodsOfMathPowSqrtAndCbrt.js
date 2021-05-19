function cutCube(volume, n) {
	//coding here...
	let length = volume / n
	if (Number.isInteger(Math.cbrt(n)) && Number.isInteger(Math.cbrt(length))) {
		return true
	} else {
		return false
	}
}
