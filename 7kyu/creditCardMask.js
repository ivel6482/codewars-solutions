// return masked string
function maskify(cc) {
  return cc.split('').map((char, index) => {
    const indexToMask = cc.length - 5
    if (index <= indexToMask) {
      return '#'
    } else {
      return char
    }
  }).join('')
}
