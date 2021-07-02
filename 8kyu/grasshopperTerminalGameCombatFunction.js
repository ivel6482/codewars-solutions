function combat(health, damage) {
	// Write your code here
	if (health - damage > 0) {
		return health - damage
	} else {
		return 0
	}
}
