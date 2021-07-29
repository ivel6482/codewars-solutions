// array of numbers, 0 and positive values
// array of numbers, only odd numbers will be sorted, leaving the even number on their original place.
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(arr) {
	// get the element that are odd
	// sort the odd number array
	// map through the arr
	// inside the array check if current element is even, if even return el without modifying else return the el from the odd array
	const odd = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b)
	return arr.map((num) => (num % 2 === 0 ? num : odd.shift()))
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
