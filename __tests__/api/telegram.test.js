const axios = require('axios')
const {
    TELEGRAM_API,
    TELEGRAM_CHAT_ID,
    TELEGRAM_MESSAGE,
    TELEGRAM_TOKEN,
    sendMessage
} = require('../../src/api/telegram')

jest.mock('axios')

describe('send message to telegram', () => {
    const endpoint = `${TELEGRAM_API}/bot${TELEGRAM_TOKEN}/sendMessage`
    const payload = { chat_id: TELEGRAM_CHAT_ID, text: TELEGRAM_MESSAGE }

    it('should return the send text message on success', async () => {
        const mockTelegramResponse = {
            ok: true,
            result: {
                text: TELEGRAM_MESSAGE
            }
        }

        axios.post.mockResolvedValueOnce({ data: mockTelegramResponse })

        const result = await sendMessage()

        expect(axios.post).toHaveBeenCalledWith(endpoint, payload)
        expect(result).toEqual({
            ok: true,
            result: {
                text: TELEGRAM_MESSAGE
            }
        })
    })

  it('should return an error when unable to send the message', async () => {
    const errorMessage = "Network Error"
    const mockResponse = new Error(errorMessage)

    axios.post.mockRejectedValueOnce(mockResponse)

    const result = await sendMessage()

    expect(axios.post).toHaveBeenLastCalledWith(endpoint, payload)
    expect(result).toEqual(mockResponse)
  })
})
