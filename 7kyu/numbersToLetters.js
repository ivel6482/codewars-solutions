function switcher(x) {
	// Parameters
	// x - Array of numbers in string format.
	// Returns
	// A message using the numbers in the array to use the corresponding letter of the alphabet.
	// Example
	// ['1', '2'] => 'zy'
	// Pseudo code
	// Variable to store the reversed alphabet, this is string. If a string does not work, use an array instead.
	// map through x and replace the number with the corresponding letter using the index
	// call join on the returned array

	const alphabet = 'zyxwvutsrqponmlkjihgfedcba!? '

	const converted = x.map((num) => {
		return alphabet[num - 1]
	})

	return converted.join('')
}
