function isClosingDateEqualsToCurrentDate (payload, currentDate) {
    const { day, month, year } = payload.closing
    const dayCurrentDate = currentDate.date()
    const monthCurrentDate = currentDate.month() + 1
    const yearCurrentDate = currentDate.year()

    return dayCurrentDate === day 
            && monthCurrentDate === month
            && yearCurrentDate === year
}

module.exports.isClosingDateEqualsToCurrentDate = isClosingDateEqualsToCurrentDate
