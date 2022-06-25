const moment = require('moment')

function leadingZeros (number, targetLength) {
    const str = String(number)
    return str.padStart(targetLength, 0)
}

function addingDate (date, amount, key) {
    return moment(date).add(amount, key)
}

function matchDay (dayCurrentDate, closingDay) {
    return leadingZeros(dayCurrentDate, 2) === leadingZeros(closingDay, 2)
}

function matchMonth (monthCurrentDate, closingMonth) {
    return leadingZeros(monthCurrentDate, 2) === leadingZeros(closingMonth, 2)
}

function matchYear (yearCurrentDate, closingYear) {
    return yearCurrentDate === closingYear
}

function isTheBallMarketOpen (status) {
    return status === 1
}

function isLeftHoursToCloseMarket (payload, currentDate, target) {
    const { hour } = payload.closing
    return addingDate(currentDate, target, 'h').hour() === hour
            && currentDate.minute() === 0
}

function isClosingDateEqualToCurrentDate (payload, currentDate) {
    const { day, month, year } = payload.closing
    const dayCurrentDate = currentDate.date()
    const monthCurrentDate = currentDate.month() + 1
    const yearCurrentDate = currentDate.year()

    return matchDay(dayCurrentDate, day)
            && matchMonth(monthCurrentDate, month)
            && matchYear(yearCurrentDate, year)
}

function canSendMessage (payload, currentDate) {
    return isTheBallMarketOpen(payload.status) 
            && isClosingDateEqualToCurrentDate(payload, currentDate)
            && (isLeftHoursToCloseMarket(payload, currentDate, 12)
                || isLeftHoursToCloseMarket(payload, currentDate, 6)
                || isLeftHoursToCloseMarket(payload, currentDate, 3)
                || isLeftHoursToCloseMarket(payload, currentDate, 1))
}

module.exports.canSendMessage = canSendMessage
module.exports.isClosingDateEqualToCurrentDate = isClosingDateEqualToCurrentDate


/**
 * Bot vai rodar a cada 5 minutos
 * 
 * 1 hour or more to close
 *   - 
 * 
 * less than 1 hour to closing
 */