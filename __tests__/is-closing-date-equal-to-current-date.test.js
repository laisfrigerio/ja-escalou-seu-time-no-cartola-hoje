const moment = require('moment')
const { isClosingDateEqualToCurrentDate } = require('../src/index')

describe('is closing date equals to current date', () => {
    const cartolaResponse = {
        status: 1,
        closing: {
            day: 25,
            month: 6,
            year: 2022,
            hour: 16,
            minute: 0
        }
    }

    it('should return false when current day is not closing day', () => {
        const currentDate = moment('2022-06-24')
        expect(isClosingDateEqualToCurrentDate(cartolaResponse, currentDate)).toBe(false)
    })

    it('should return false when current month is not closing month', () => {
        const currentDate = moment('2022-05-25')
        expect(isClosingDateEqualToCurrentDate(cartolaResponse, currentDate)).toBe(false)
    })
    
    it('should return false when current year is not closing year', () => {
        const currentDate = moment('2021-06-25')
        expect(isClosingDateEqualToCurrentDate(cartolaResponse, currentDate)).toBe(false)
    })

    it('should return true when current date is equals to closing date', () => {
        const currentDate = moment('2022-06-25')
        expect(isClosingDateEqualToCurrentDate(cartolaResponse, currentDate)).toBe(true)
    })

    it('should return true when current date is equals to closing day (day less than 10)', () => {
        const currentDate = moment('2022-06-03')
        const response = {
            ...cartolaResponse,
            closing: {
                ...cartolaResponse.closing,
                day: 3
            }
        }
        expect(isClosingDateEqualToCurrentDate(response, currentDate)).toBe(true)
    })
})