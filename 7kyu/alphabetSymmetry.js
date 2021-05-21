function solve(arr) {
	//code
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'

	return arr.map((string) => {
		let count = 0
		string
			.toLowerCase()
			.split('')
			.forEach((char, index) => {
				//         if (index === alphabet.indexOf(char))  {
				//           count++
				//         }
				return index === alphabet.indexOf(char) ? count++ : count
			})
		return count
	})
}
