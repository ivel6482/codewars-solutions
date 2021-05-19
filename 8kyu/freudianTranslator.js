function toFreud(string) {
	return string === ''
		? ''
		: string
				.split(' ')
				.map((el) => 'sex')
				.join(' ')
				.trim()
}
