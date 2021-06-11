function numberToPower(number, power) {
	// Code here
	let total = 1
	for (let i = 1; i <= power; i++) {
		total *= number
	}
	return total
}
