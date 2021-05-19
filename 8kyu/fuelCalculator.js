function fuelPrice(litres, pricePerLitre) {
	// your code here
	// Good luck with it!
	const discount =
		litres >= 10
			? 0.25
			: litres >= 8
			? 0.2
			: litres >= 6
			? 0.15
			: litres >= 4
			? 0.1
			: litres >= 2
			? 0.05
			: 0
	console.log(litres, discount)
	return Number((litres * (pricePerLitre - discount)).toFixed(2))
}
