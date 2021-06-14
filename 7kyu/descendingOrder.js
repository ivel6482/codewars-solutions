function descendingOrder(n) {
	//...
	return +[...String(n)].sort((a, b) => b - a).join('')
}
