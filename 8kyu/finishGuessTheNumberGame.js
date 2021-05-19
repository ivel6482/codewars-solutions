class Guesser {
	constructor(number, lives) {
		this.number = number
		this.lives = lives
	}

	guess(n) {
		if (this.lives > 0 && this.number === n) return true
		else if (this.lives > 0 && this.number !== n) {
			this.lives--
			return false
		} else throw new Error('Error')
	}
}
