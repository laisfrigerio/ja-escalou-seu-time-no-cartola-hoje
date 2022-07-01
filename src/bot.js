const dotenv = require('dotenv')
dotenv.config()

const { isModOf, sameOf } = require('./helpers/math')
const { difference } = require('./helpers/date')
const { MARKET_STATUS } = require('./const')

function differenceInHour(payload, currentDate, target) {
  const diffMinute = difference(payload, currentDate, 'm')
  const diffHour = difference(payload, currentDate, 'h')
  return sameOf(diffHour, target) && isModOf(diffMinute, 60, 0)
}

function differenceInMinute(payload, currentDate, target) {
  const diffMinute = difference(payload, currentDate, 'm')
  return sameOf(diffMinute, target)
}

function isTheMarketOpen(status) {
  return status === MARKET_STATUS.open
}

function isExactHour(payload, currentDate) {
  return differenceInHour(payload, currentDate, 72)
    || differenceInHour(payload, currentDate, 48)
    || differenceInHour(payload, currentDate, 24)
    || differenceInHour(payload, currentDate, 12)
    || differenceInHour(payload, currentDate, 6)
    || differenceInHour(payload, currentDate, 3)
    || differenceInHour(payload, currentDate, 1)
}

function isExactMinute(payload, currentDate) {
  return differenceInMinute(payload, currentDate, 45)
    || differenceInMinute(payload, currentDate, 30)
    || differenceInMinute(payload, currentDate, 15)
}

function isExactPeriod(payload, currentDate) {
  return isExactHour(payload, currentDate)
    || isExactMinute(payload, currentDate)
}

function canSendMessage(payload, currentDate) {
  return isTheMarketOpen(payload.status)
    && isExactPeriod(payload, currentDate)
}

module.exports = {
  canSendMessage,
  differenceInHour,
  differenceInMinute,
  isExactHour,
  isExactMinute,
  isExactPeriod,
  isTheMarketOpen
}
