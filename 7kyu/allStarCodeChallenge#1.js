function sumPPG(playerOne, playerTwo) {
	return [playerOne.ppg, playerTwo.ppg].reduce((acc, ppg) => acc + ppg, 0)
}
