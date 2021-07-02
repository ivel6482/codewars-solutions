function calculateTip(amount, rating) {
	let percent = 0
	const formattedRating = rating.toLowerCase()
	switch (formattedRating) {
		case 'terrible':
			percent = 0
			break
		case 'poor':
			percent = 0.05
			break
		case 'good':
			percent = 0.1
			break
		case 'great':
			percent = 0.15
			break
		case 'excellent':
			percent = 0.2
			break
		default:
			return 'Rating not recognised'
	}
	return Math.ceil(amount * percent)
}
