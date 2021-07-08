function calculateAge(y1, y2) {
	// enter your code here.
	const difference = y2 - y1
	const sign = Math.sign(difference)
	if (sign === 1 && difference > 1) {
		return `You are ${difference} years old.`
	} else if (sign === 1 && difference === 1) {
		return `You are ${difference} year old.`
	} else if (difference === 0) {
		return `You were born this very year!`
	} else {
		return `You will be born in ${Math.abs(difference)} ${
			difference === -1 ? 'year.' : 'years.'
		}`
	}
}
