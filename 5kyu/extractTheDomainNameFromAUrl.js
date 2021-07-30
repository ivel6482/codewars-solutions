function domainName(url) {
	// if replace doesn't find a match, it'll return the original string, since what it returns is a string we can chain their calls.
	return url
		.replace('http://', '')
		.replace('https://', '')
		.replace('www.', '')
		.split('.')[0]
}
