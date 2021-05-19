function doubleChar(str) {
	// Your code here
	//Create an empty array to push doubles in
	let arr = []
	// Loop through every character including spaces and add them two times to the array
	for (let i = 0; i < str.length; i++) {
		for (let j = 1; j <= 2; j++) {
			arr.push(str[i])
		}
	}
	// Return the array as a string
	return arr.join('')
}
