function leadingZeros (number, targetLength) {
    const str = String(number)
    return str.padStart(targetLength, 0)
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

function isClosingDateEqualsToCurrentDate (payload, currentDate) {
    const { day, month, year } = payload.closing
    const dayCurrentDate = currentDate.date()
    const monthCurrentDate = currentDate.month() + 1
    const yearCurrentDate = currentDate.year()

    return matchDay(dayCurrentDate, day)
            && matchMonth(monthCurrentDate, month)
            && matchYear(yearCurrentDate, year)
}

module.exports.isClosingDateEqualsToCurrentDate = isClosingDateEqualsToCurrentDate


/**
 * Bot vai rodar a cada 5 minutos
 * 
 * 1 hour or more to close
 *   - 
 * 
 * less than 1 hour to closing
 */