function vertMirror(strng) {
	// Your code
	return strng
		.split('\n')
		.map((el) => [...el].reverse().join(''))
		.join('\n')
}
function horMirror(strng) {
	// Your code
	return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
	// Your code
	return fct(s)
}
