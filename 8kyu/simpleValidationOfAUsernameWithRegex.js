function validateUsr(username) {
	console.log(username)
	return /^[a-z0-9_]{4,16}$/.test(username)
}
