const moment = require('moment')

const { fetchMarketStatus } = require('./api/cartola')
const { sendMessage } = require('./api/telegram')
const { canSendMessage } = require('./bot')

async function main() {
  const currentDate = moment(moment().format('YYYY-MM-DD HH:mm'))
  console.log(currentDate)
  const payload = await fetchMarketStatus()

  if (canSendMessage(payload, currentDate)) {
    await sendMessage()
  }
}

main()

module.exports = main
