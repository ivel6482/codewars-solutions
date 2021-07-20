function checkExam(array1, array2) {
	// good luck

	const score = array1
		.map((answer, i) => (answer === array2[i] ? 4 : array2[i] === '' ? 0 : -1))
		.reduce((acc, score) => acc + score, 0)
	return score < 0 ? 0 : score
}
