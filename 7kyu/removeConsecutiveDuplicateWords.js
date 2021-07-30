const removeConsecutiveDuplicates = (s) =>
	s
		.split(' ')
		.filter((str, i, arr) => str !== arr[i + 1])
		.join(' ')
