function nextId(ids) {
	//this will be awesome!
	ids.sort((a, b) => a - b)
	const unique = [...new Set(ids)]
	if (unique[0] !== 0) return 0
	for (let i = 0; i < unique.length; i++) {
		if (unique[i + 1] - unique[i] !== 1) {
			return unique[i] + 1
		}
	}
}
