const dotenv = require('dotenv')
dotenv.config()

const { isModOf, sameOf } = require('./helpers/math')
const { difference } = require('./helpers/date')

function differenceInHour (payload, currentDate, target) {
  const diffMinute = difference(payload, currentDate, 'm')
  const diffHour = difference(payload, currentDate, 'h')
  return sameOf(diffHour, target) && isModOf(diffMinute, 60, 0)
}

function differenceInMinute (payload, currentDate, target) {
  const diffMinute = difference(payload, currentDate, 'm')
  return sameOf(diffMinute, target)
}

function isTheMarketOpen (status) {
  return status === 1
}

function isExactHour (payload, currentDate) {
  return differenceInHour(payload, currentDate, 12)
          || differenceInHour(payload, currentDate, 6)
          || differenceInHour(payload, currentDate, 3)
          || differenceInHour(payload, currentDate, 1)
}

function isExactMinute (payload, currentDate) {
  return differenceInMinute(payload, currentDate, 30)
          || differenceInMinute(payload, currentDate, 15)
}

function isExactPeriod (payload, currentDate) {
  return isExactHour(payload, currentDate)
          || isExactMinute(payload, currentDate)
}

function canSendMessage (payload, currentDate) {
  return isTheMarketOpen(payload.status) 
          && isExactPeriod(payload, currentDate)
}

module.exports = {
  canSendMessage,
  differenceInMinute
}
