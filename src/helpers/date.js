const moment = require('moment')
const { leadingZeros } = require('./string')

function getClosingDate (payload) {
    const { closing } = payload
    const { year } = closing

    const month = leadingZeros(closing.month, 2)
    const day = leadingZeros(closing.day, 2)
    const hour = leadingZeros(closing.hour, 2)
    const minute = leadingZeros(closing.minute, 2)

    return moment(`${year}-${month}-${day} ${hour}:${minute}`)
}

function difference (payload, currentDate, key) {
    const closingDatetime = getClosingDate(payload)
    return closingDatetime.diff(currentDate, key)
}

module.exports = {
    difference
}
