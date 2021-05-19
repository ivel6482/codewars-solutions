function mango(quantity, price) {
	let free = 0
	for (let i = 1; i <= quantity; i++) {
		if (i % 3 === 0) free++
	}
	return (quantity - free) * price
}
