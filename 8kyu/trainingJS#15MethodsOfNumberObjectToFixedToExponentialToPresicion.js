function howManySmaller(arr, n) {
	//coding here..
	let count = 0
	arr.forEach((num) => {
		if (num.toFixed(2) < n) {
			count++
		}
	})
	return count
}
