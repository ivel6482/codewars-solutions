function travel(r, zipcode) {
	// your code
	const addresses = r.split(',')
	const matchedAddresses = addresses.filter((address) => {
		const currentZipcode = address.substr(-8)
		return currentZipcode === zipcode
	})

	if (matchedAddresses) {
		const addresses = matchedAddresses.map((address) => {
			return address.slice(address.indexOf(' '), address.search(zipcode)).trim()
		})
		const numbers = matchedAddresses.map((address) => address.split(' ')[0])
		return `${zipcode}:${addresses.join(',')}/${numbers.join(',')}`
	} else {
		return `${zipcode}:/`
	}
}
