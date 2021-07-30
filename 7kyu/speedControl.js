function gps(s, x) {
	// your code
	const sections = []
	for (let i = 0; i < x.length - 1; i++) {
		sections.push(`${x[i]}-${x[i + 1]}`)
	}

	const topSpeeds = sections.map(
		(section) => (3600 * (+section.split('-')[1] - +section.split('-')[0])) / s
	)

	return topSpeeds.length ? Math.max(...topSpeeds) : 0
}
