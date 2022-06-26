function leadingZeros (number, targetLength) {
    const str = String(number)
    return str.padStart(targetLength, 0)
}

module.exports = {
    leadingZeros
}
