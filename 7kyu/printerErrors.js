function printerError(s) {
	// your code
	// Parameters
	// s - String that contains letters from a to z and can be 1 or more letters.
	// Return
	// Fraction with the numerator being the number of error in that string being letters that are not from a to m and the denominator will be the length of the string.
	// Example
	// s - 'aaabbbbmmm' => '0/10'
	// s - 'aabbyy' => '2/6'
	// Pseudo code
	// Create a variable containing the valid letters
	// loop thourgh the string and check if the characters are valid, if the character is not valid it will add to a error counter

	const validColors = 'abcdefghijklm'
	let errorCounter = 0
	const colorLength = s.length

	s.split('').forEach((color) => {
		if (!validColors.includes(color)) {
			errorCounter++
		}
	})

	return `${errorCounter}/${colorLength}`
}
