function calculator(a, b, sign) {
	switch (sign) {
		case '+':
		case '-':
		case '*':
		case '/':
			if (typeof a === 'number' && typeof b === 'number')
				return eval(`${a} ${sign} ${b}`)
			return 'unknown value'

		default:
			return 'unknown value'
	}
}
