function mergeArrays(arr1, arr2) {
	// Set is a collection of unique keys, so it removes any repeated keys.
	return [...new Set(arr1.concat(arr2).sort((a, b) => a - b))]
}
