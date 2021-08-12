var number = function (array) {
	//your awesome code here
	const res = []
	array.forEach((el, i) => {
		res.push(`${i + 1}: ${el}`)
	})
	return res
}
