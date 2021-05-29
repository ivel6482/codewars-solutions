function scale(strng, k, n) {
	// your code
	if (strng.length > 0) {
		const arr = strng.split('\n')
		const duplicated = arr.map((el) => {
			const group =
				el
					.split('')
					.map((char) => char.repeat(k))
					.join('') + '\n'
			return group.repeat(n)
		})
		const str = duplicated.join('')
		return str.substring(0, str.length - 1)
	} else {
		return ''
	}
}
