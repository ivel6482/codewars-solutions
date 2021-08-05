function bump(x) {
	const arr = x.split('')
	const bumps = arr.filter((el) => el === 'n').length
	return bumps <= 15 ? 'Woohoo!' : 'Car Dead'
}
