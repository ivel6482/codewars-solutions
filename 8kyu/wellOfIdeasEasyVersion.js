function well(x) {
	let counter = 0
	x.forEach((kata) => {
		if (kata === 'good') {
			counter++
		}
	})

	if (counter > 0 && counter <= 2) {
		return 'Publish!'
	} else if (counter >= 3) {
		return 'I smell a series!'
	} else {
		return 'Fail!'
	}
}
