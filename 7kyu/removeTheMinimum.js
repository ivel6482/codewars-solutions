function removeSmallest(numbers) {
	const smallest = numbers.indexOf(Math.min(...numbers))
	return [...numbers.slice(0, smallest), ...numbers.slice(smallest + 1)]
}
