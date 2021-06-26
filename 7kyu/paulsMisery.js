function paul(x) {
	const score = x.reduce((acc, el) => {
		if (el === 'kata') {
			return acc + 5
		} else if (el === 'Petes kata') {
			return acc + 10
		} else if (el === 'life') {
			return acc
		} else if (el === 'eating') {
			return acc + 1
		}
	}, 0)

	if (score > 100) {
		return 'Miserable!'
	} else if (score < 100 && score >= 70) {
		return 'Sad!'
	} else if (score < 70 && score >= 40) {
		return 'Happy!'
	} else {
		return 'Super happy!'
	}

	return score
}
