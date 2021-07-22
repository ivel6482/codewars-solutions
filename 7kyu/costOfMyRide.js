function insurance(age, size, numofdays) {
	const charge = age < 25 ? 10 : 0

	if (numofdays <= 0) return 0
	switch (size) {
		case 'economy':
			return (charge + 50) * numofdays
		case 'medium':
			return (10 + charge + 50) * numofdays
		case 'full-size':
		default:
			return (15 + charge + 50) * numofdays
	}
}
