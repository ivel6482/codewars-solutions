var cubeChecker = function (volume, side) {
	return volume < 1 && side < 1 ? false : Math.cbrt(volume) === side
}
