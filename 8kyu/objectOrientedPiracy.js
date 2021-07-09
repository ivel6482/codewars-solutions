function Ship(draft, crew) {
	this.draft = draft
	this.crew = crew
	this.isWorthIt = () => {
		const count = this.crew * 1.5
		const draft = this.draft - count
		return draft >= 20
	}
}
