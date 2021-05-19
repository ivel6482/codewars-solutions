function grabDoll(dolls) {
	var bag = []
	//coding here
	for (let i = 0; i < dolls.length; i++) {
		console.log(dolls[i])
		if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
			console.log(dolls[i])
			if (bag.length === 3) {
				break
			} else {
				bag.push(dolls[i])
			}
		} else {
			continue
		}
	}
	return bag
}
