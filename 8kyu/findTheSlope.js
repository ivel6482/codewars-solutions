function slope(points) {
	//..
	const slope = (points[3] - points[1]) / (points[2] - points[0])
	return points[2] - points[0] === 0 ? 'undefined' : slope.toString()
}
