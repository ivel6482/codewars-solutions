function alphabetWar(fight) {
	const left = {
		w: 4,
		p: 3,
		b: 2,
		s: 1,
	}

	const right = {
		m: 4,
		q: 3,
		d: 2,
		z: 1,
	}

	let leftCounter = 0
	let rightCounter = 0

	fight.split('').forEach((char) => {
		if (left[char]) {
			leftCounter += left[char]
		} else if (right[char]) {
			rightCounter += right[char]
		}
	})

	if (leftCounter > rightCounter) {
		return 'Left side wins!'
	} else if (rightCounter > leftCounter) {
		return 'Right side wins!'
	} else {
		return "Let's fight again!"
	}
}
