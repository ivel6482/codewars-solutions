function task(w, n, c) {
	const name = {
		Monday: 'James',
		Tuesday: 'John',
		Wednesday: 'Robert',
		Thursday: 'Michael',
		Friday: 'William',
	}
	return `It is ${w} today, ${
		name[w]
	}, you have to work, you must spray ${n} trees and you need ${
		n * c
	} dollars to buy liquid`
}
