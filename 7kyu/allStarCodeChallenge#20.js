function addArrays(array1, array2) {
	//code here
	if (array1.length !== array2.length) {
		throw new Error('Error')
	} else {
		return array1.map((el, i) => el + array2[i])
	}
}
