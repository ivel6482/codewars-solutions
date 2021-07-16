function uniTotal(str) {
	// total up dem unicodes!
	return [...str].reduce((acc, char, i) => acc + str.codePointAt(i), 0)
}
