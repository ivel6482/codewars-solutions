function alan(x) {
	const stops = [
		'Rejection',
		'Disappointment',
		'Backstabbing Central',
		'Shattered Dreams Parkway',
	]
	return stops.every((stop) => x.includes(stop))
		? 'Smell my cheese you mother!'
		: 'No, seriously, run. You will miss it.'
}
