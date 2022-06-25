const axios = require('axios')
const BASE_URL = 'https://api.cartola.globo.com'

async function fetchMarketStatus () {
    return await axios.get(`${BASE_URL}/mercado/status`)
                            .then(({data}) => data)
                            .catch((error) => error)
}

module.exports.BASE_URL = BASE_URL
module.exports.fetchMarketStatus = fetchMarketStatus
