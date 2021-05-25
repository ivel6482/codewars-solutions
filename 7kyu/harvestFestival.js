function plant(seed, water, fert, temp) {
	//your code here
	let stem = '-'
	let plant = ''

	let finalStem = stem.repeat(water)
	let finalSeed = fert ? seed.repeat(fert) : seed.repeat(water)
	let normal = temp >= 20 && temp <= 30

	if (normal) {
		plant = finalStem + finalSeed
		plant = plant.repeat(water)
	} else {
		plant = finalStem
		plant = plant.repeat(water)
		plant = plant + seed
	}

	return plant
}
