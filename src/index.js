const { fetchMarketStatus } = require('./api/cartola')

function isClosingDateEqualsToCurrentDate (payload, currentDate) {
    const { day, month, year } = payload.closing
    const dayCurrentDate = currentDate.getDate()
    const monthCurrentDate = currentDate.getMonth() + 1
    const yearCurrentDate = currentDate.getFullYear()

    return dayCurrentDate === day 
            && monthCurrentDate === month
            && yearCurrentDate === year
}

fetchMarketStatus()

module.exports.isClosingDateEqualsToCurrentDate = isClosingDateEqualsToCurrentDate
