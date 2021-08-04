var gimme = function (inputArray) {
	const arr = [...inputArray].sort((a, b) => a - b)
	return inputArray.indexOf(arr[1])
}
