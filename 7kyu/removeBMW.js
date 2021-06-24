const removeBMW = (str) =>
	typeof str === 'string'
		? str.replace(/[bmw]/gi, '')
		: new Error('This program only works for text.')
