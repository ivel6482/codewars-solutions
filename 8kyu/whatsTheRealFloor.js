function getRealFloor(n) {
	// Parameters
	// - n => floor number
	// Result
	// - if n === 1 then result will be 0
	// - if n === 13 then result will be 12
	// - if n > 13 then result will be n - 2
	// - if n =< 0 then result will be n
	// Example
	// 1 => 0
	// 0 => 0
	// 5 => 4
	// 15 => 13
	// -3 => -3
	// Pseudo Code
	// 1. compare parameter to <= 0 or > 13
	// 2. if n <= 0 return n
	// 3. if n > 0 and n < 14 return n - 1
	// 4. if n > 13 return n - 2

	if (n >= 13) return n - 2
	else if (n > 0 && n <= 13) return n - 1
	else return n
}
