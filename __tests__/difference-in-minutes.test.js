const moment = require('moment')
const { differenceInMinutes } = require('../src/index')

describe('diff in minutes equal to target', () => {
    const payload = {
        status: 1,
        closing: {
            day: 4,
            month: 7,
            year: 2022,
            hour: 18,
            minute: 0
        }
    }

    it('should return false because the diff is not equals to 56', async () => {
        const currentDate = moment('2022-07-04 17:05')
        expect(differenceInMinutes(payload, currentDate, 56)).toBe(false)
    })

    it('should return true because the diff is equals to 60', async () => {
        const currentDate = moment('2022-07-04 17:00')
        expect(differenceInMinutes(payload, currentDate, 60)).toBe(true)
    })

    it('should return true because the diff is equals to 30', async () => {
        const currentDate = moment('2022-07-04 17:30')
        expect(differenceInMinutes(payload, currentDate, 30)).toBe(true)
    })

    it('should return true because the diff is equals to 15', async () => {
        const currentDate = moment('2022-07-04 17:45')
        expect(differenceInMinutes(payload, currentDate, 15)).toBe(true)
    })
})