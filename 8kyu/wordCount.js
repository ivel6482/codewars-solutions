function countWords(str) {
	// ...
	return str.split(/\s+/g).filter((el) => el !== '').length
}
