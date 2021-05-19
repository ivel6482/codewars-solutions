function betterThanAverage(classPoints, yourPoints) {
	// Your code here
	const total = classPoints.reduce((acc, n) => n + acc, 0)
	const avg = total / classPoints.length
	return avg < yourPoints
}
