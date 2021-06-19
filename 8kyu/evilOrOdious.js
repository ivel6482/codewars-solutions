function evil(n) {
	const binary = n.toString(2)
	const numMap = {}
	binary.split('').forEach((num) => {
		if (numMap.hasOwnProperty(num)) {
			return numMap[num]++
		} else {
			return (numMap[num] = 1)
		}
	})
	return numMap['1'] % 2 === 0 ? "It's Evil!" : "It's Odious!"
}
