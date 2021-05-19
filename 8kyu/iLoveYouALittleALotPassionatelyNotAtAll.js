function howMuchILoveYou(nbPetals) {
	// your code
	const outcomes = [
		'I love you',
		'a little',
		'a lot',
		'passionately',
		'madly',
		'not at all',
	]
	const index =
		nbPetals % outcomes.length > 0
			? (nbPetals % outcomes.length) - 1
			: (nbPetals % outcomes.length) + 5
	console.log(index)
	return outcomes[index]
}
