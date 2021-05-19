function all(arr, fun) {
	// ...
	const result = arr.map((el) => fun(el))
	return result.every((el) => el)
}
