function averageLength(arr) {
	// good luck
	const length = Math.round(
		arr.reduce((acc, total) => acc + total.length, 0) / arr.length
	)
	return arr.map((w) => w[0].repeat(length))
}
