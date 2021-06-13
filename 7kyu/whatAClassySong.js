// code here
class Song {
	constructor(title, artist) {
		this.title = title
		this.artist = artist
		this.alreadyListened = []
	}

	howMany(people) {
		let count = 0
		people.forEach((person) => {
			if (!this.alreadyListened.includes(person.toLowerCase())) {
				this.alreadyListened.push(person.toLowerCase())
				count++
			}
		})
		return count
	}
}
