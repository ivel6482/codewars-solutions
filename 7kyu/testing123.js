var number = function (array) {
	//your awesome code here
	const res = []
	array.forEach((elem, i) => {
		res.push(`${i + 1}: ${elem}`)
	})
	return res
}
