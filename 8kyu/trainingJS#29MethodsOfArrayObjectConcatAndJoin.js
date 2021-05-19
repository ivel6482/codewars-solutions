function bigToSmall(arr) {
	//coding here...
	let flat = [].concat(...arr)
	return flat.sort((a, b) => b - a).join('>')
}
