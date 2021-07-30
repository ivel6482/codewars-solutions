function dup(s) {
	//..
	return s.map((str) =>
		[...str].filter((sub, i, arr) => sub !== arr[i + 1]).join('')
	)
}
