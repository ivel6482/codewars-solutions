function any(arr, fun) {
	// ...
	return arr.some((el) => fun(el) === true)
}
