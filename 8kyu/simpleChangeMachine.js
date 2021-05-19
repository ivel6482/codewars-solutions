function changeMe(moneyIn) {
	// Write your function here
	const symbol = '£'
	switch (moneyIn) {
		case symbol + '5':
			return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
		case symbol + '2':
			return '20p 20p 20p 20p 20p 20p 20p 20p 20p 20p'
		case symbol + '1':
			return '20p 20p 20p 20p 20p'
		case '50p':
			return '20p 20p 10p'
		case '20p':
			return '10p 10p'
		default:
			return moneyIn
	}
}
