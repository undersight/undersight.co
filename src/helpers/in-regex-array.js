const inRegexArray = function(str, arr) {
  return arr.reduce((a, b) => a || RegExp(b).test(str), false)
}

export default inRegexArray
