const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const BASE_URL = process.env.CARTOLA_API

function adapterMarketStatus (payload) {
  const { dia, mes, ano, hora, minuto } = payload.fechamento

  return {
    status: payload.status_mercado,
    closing: {
      day: dia,
      month: mes,
      year: ano,
      hour: hora,
      minute: minuto
    }
  }
}

async function fetchMarketStatus () {
  const data = await axios.get(`${BASE_URL}/mercado/status`)
                          .then(({data}) => data)
                          .catch((error) => error)

  if (data instanceof Error) {
    return data
  }

  return adapterMarketStatus(data)
}

module.exports = {
  BASE_URL,
  fetchMarketStatus
}
