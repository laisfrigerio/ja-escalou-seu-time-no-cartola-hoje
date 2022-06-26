const axios = require('axios')
const { BASE_URL, fetchMarketStatus } = require('../../src/api/cartola')

jest.mock("axios")

describe('get "mercado status"', () => {
  it('should return status and datetime limit', async () => {
    const mockCartolaResponse = {
      status_mercado: 1,
      fechamento: {
        dia: 25,
        mes: 6,
        ano: 2022,
        hora: 16,
        minuto: 0
      }
    }

    axios.get.mockResolvedValueOnce({ data: mockCartolaResponse })

    const result = await fetchMarketStatus()

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/mercado/status`)
    expect(result).toEqual({
      status: 1,
      closing: {
        day: 25,
        month: 6,
        year: 2022,
        hour: 16,
        minute: 0
      }
    })
  })

  it('should return an error on get the information', async () => {
    const message = "Network Error"
    const mockResponse = new Error(message)

    axios.get.mockRejectedValueOnce(mockResponse)

    const result = await fetchMarketStatus()

    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/mercado/status`)
    expect(result).toEqual(mockResponse)
  })
})
