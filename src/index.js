const moment = require('moment')

const { fetchMarketStatus } = require('./api/cartola')
const { sendMessage } = require('./api/telegram')
const { canSendMessage } = require('./bot')

async function main () {
  console.log("DEVE RODAR A CADA 1 MINUTE")
  const currentDate = moment(moment().format('YYYY-MM-DD HH:mm'))
  console.log(currentDate)
  const payload = await fetchMarketStatus()
  // const currentDate = moment('2022-07-02 18:15')
  // const payload = {
  //   status: 1,
  //   closing: {
  //     day: 2,
  //     month: 7,
  //     year: 2022,
  //     hour: 18,
  //     minute: 30
  //   }
  // }

  if (canSendMessage(payload, currentDate)) {
    await sendMessage()
  }
}

module.exports = main
