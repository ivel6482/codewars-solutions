function lastSurvivor(letters, coords) {
	const arr = letters.split('')
	coords.forEach((coord) => {
		return arr.splice(coord, 1)
	})
	return arr.join('')
}
