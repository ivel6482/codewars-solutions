function stairsIn20(s) {
	const dayTotal = s.map((day) => day.reduce((acc, steps) => acc + steps, 0))
	const yearTotal = dayTotal.reduce((acc, steps) => acc + steps, 0)
	return yearTotal * 20
}
