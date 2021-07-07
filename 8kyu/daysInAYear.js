const yearDays = (year) =>
	`${year} has ${
		year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? '366' : '365'
	} days`
