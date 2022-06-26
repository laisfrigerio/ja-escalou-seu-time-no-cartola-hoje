const { isModOf, sameOf } = require('./helpers/math')
const { difference } = require('./helpers/date')

function isTheMarketOpen (status) {
    return status === 1
}

function isLeftHoursToCloseMarket (payload, currentDate, target) {
    const diffMinute = difference(payload, currentDate, 'm')
    const diffHour = difference(payload, currentDate, 'h')

    return sameOf(diffHour, target) && isModOf(diffMinute, 60, 0)
}

function differenceInMinutes (payload, currentDate, target) {
    const diffMinute = difference(payload, currentDate, 'm')
    return sameOf(diffMinute, target)
}

function isExactHourToSendMessage (payload, currentDate) {
    return isLeftHoursToCloseMarket(payload, currentDate, 12)
            || isLeftHoursToCloseMarket(payload, currentDate, 6)
            || isLeftHoursToCloseMarket(payload, currentDate, 3)
            || isLeftHoursToCloseMarket(payload, currentDate, 1)
}

function isExactMinuteToSendMessage (payload, currentDate) {
    return differenceInMinutes(payload, currentDate, 30)
            || differenceInMinutes(payload, currentDate, 15)
}

function isExactPeriodToSendMessage (payload, currentDate) {
    return isExactHourToSendMessage(payload, currentDate)
            || isExactMinuteToSendMessage(payload, currentDate)
}

function canSendMessage (payload, currentDate) {
    return isTheMarketOpen(payload.status) 
            && isExactPeriodToSendMessage(payload, currentDate)
}

module.exports = {
    canSendMessage,
    differenceInMinutes
}
