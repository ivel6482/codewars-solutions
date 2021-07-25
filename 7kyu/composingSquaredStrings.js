function compose(s1, s2) {
	const s2arr = s2.split('\n').reverse()
	return s1
		.split('\n')
		.map((el, i) => {
			const str = el.slice(0, i + 1) + s2arr[i]
			return i === 0 ? str : str.slice(0, i * -1)
		})
		.join('\n')
}
