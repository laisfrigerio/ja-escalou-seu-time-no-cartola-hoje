const moment = require('moment')
const { hasToSendMessage } = require('../src/index')

describe('has to send message?', () => {
    const payload = {
        status: 1,
        closing: {
            day: 25,
            month: 6,
            year: 2022,
            hour: 16,
            minute: 0
        }
    }

    it('should return false when the ball market is closed', async () => {
        const currentDate = moment('2022-06-24')
        expect(hasToSendMessage({ ...payload, status: 2 }, currentDate)).toBe(false)
    })

    it('should return false because closing date is not equal to the current date even though the ball market is open', async () => {
        const currentDate = moment('2022-06-24')
        expect(hasToSendMessage(payload, currentDate)).toBe(false)
    })

    it('should return true when the ball market is open and the current date is equal to closing date', async () => {
        const currentDate = moment('2022-06-25')
        expect(hasToSendMessage(payload, currentDate)).toBe(true)
    })
})