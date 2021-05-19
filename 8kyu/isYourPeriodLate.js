function periodIsLate(last, today, cycleLength) {
	const diff = last.getTime() - today.getTime()
	const total = diff / (1000 * 60 * 60 * 24)
	return Math.abs(total) > cycleLength
}
