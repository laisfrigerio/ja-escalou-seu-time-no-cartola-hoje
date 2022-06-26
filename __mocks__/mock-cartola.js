const { MARKET_STATUS } = require('../src/const')

const marketStatusCloseAfternoon = {
  status: MARKET_STATUS.open,
  closing: {
    day: 25,
    month: 6,
    year: 2022,
    hour: 16,
    minute: 0
  }
}

const marketStatusCloseEvening = {
  status: MARKET_STATUS.open,
  closing: {
    day: 4,
    month: 7,
    year: 2022,
    hour: 18,
    minute: 0
  }
}

const marketStatusCloseMorning = {
  status: MARKET_STATUS.open,
  closing: {
    day: 25,
    month: 6,
    year: 2022,
    hour: 10,
    minute: 30
  }
}

module.exports = {
  marketStatusCloseAfternoon,
  marketStatusCloseEvening,
  marketStatusCloseMorning
}
