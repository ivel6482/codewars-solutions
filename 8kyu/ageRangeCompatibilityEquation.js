function datingRange(age) {
	//return min-max
	const min = Math.floor(age <= 14 ? age - 0.1 * age : age / 2 + 7)
	const max = Math.floor(age <= 14 ? age + 0.1 * age : (age - 7) * 2)
	return `${min}-${max}`
}
