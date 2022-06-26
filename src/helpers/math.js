function isModOf (number, mod, target) {
  return number % mod === target
}

function sameOf (diff, target) {
  return diff === target
}

module.exports = {
  isModOf,
  sameOf
}
