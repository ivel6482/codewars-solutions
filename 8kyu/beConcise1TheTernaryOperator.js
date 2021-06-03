// TODO: Refactor and shorten the function

function describeAge(age) {
	return `You're a(n) ${
		age < 13
			? 'kid'
			: age > 12 && age < 18
			? 'teenager'
			: age > 17 && age < 65
			? 'adult'
			: 'elderly'
	}`
}
