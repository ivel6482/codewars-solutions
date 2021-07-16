function defineSuit(card) {
	// good luck
	const suits = {
		'♣': 'clubs',
		'♠': 'spades',
		'♦': 'diamonds',
		'♥': 'hearts',
	}

	return suits[card.slice(-1)]
}
