String.prototype.digit = function () {
	return Boolean(this.match(/^\d{1}$/g))
}
