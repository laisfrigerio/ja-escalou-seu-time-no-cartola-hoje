const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const { TELEGRAM_API, TELEGRAM_CHAT_ID, TELEGRAM_MESSAGE, TELEGRAM_TOKEN } = process.env

async function sendMessage () {
  const api = `${TELEGRAM_API}/bot${TELEGRAM_TOKEN}/sendMessage`
  const response = await axios.post(api, { chat_id: TELEGRAM_CHAT_ID, text: TELEGRAM_MESSAGE })
                          .then(response => response.data)
                          .catch(error => error)

  return response
}

module.exports = {
  TELEGRAM_API,
  TELEGRAM_CHAT_ID,
  TELEGRAM_MESSAGE,
  TELEGRAM_TOKEN,
  sendMessage
}
