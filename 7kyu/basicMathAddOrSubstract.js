function calculate(str) {
	//your code here...
	let replaced = str.replace(/plus/g, '+')
	replaced = replaced.replace(/minus/g, '-')
	return String(eval(replaced))
}
