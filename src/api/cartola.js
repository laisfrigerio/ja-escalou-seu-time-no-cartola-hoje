const axios = require('axios')
const BASE_URL = 'https://api.cartola.globo.com'

function adapterMarketStatus (payload) {
    const { dia, mes, ano, hora, minuto, timestamp } = payload.fechamento

    return {
        closing: {
            day: dia,
            month: mes,
            year: ano,
            hour: hora,
            minute: minuto,
            timestamp
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

module.exports.BASE_URL = BASE_URL
module.exports.fetchMarketStatus = fetchMarketStatus
