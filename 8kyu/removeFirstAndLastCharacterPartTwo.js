function array(arr) {
	//Good luck
	let arr1 = arr.split(',')
	if (arr1.length < 3) {
		return null
	} else {
		arr1.shift()
		arr1.pop()
		return arr1.join(' ')
	}
}
