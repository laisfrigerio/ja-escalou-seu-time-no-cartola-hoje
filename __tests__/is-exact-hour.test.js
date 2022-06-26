const moment = require('moment')
const { isExactHour } = require('../src/bot')
const {
    marketStatusCloseAfternoon,
    marketStatusCloseEvening,
    marketStatusCloseMorning
} = require('../__mocks__/mock-cartola')

describe('is one of those exact hour: 12, 6, 3 or 1 before closing the market', () => {
  it('should return false because there are more then 12 hours to close the market', async () => {
    const currentDate = moment('2022-06-25 01:05')
    expect(isExactHour(marketStatusCloseAfternoon, currentDate)).toBe(false)
  })

  it('should return false because there are more then 6 hours to close the market', async () => {
    const currentDate = moment('2022-07-04 11:38')
    expect(isExactHour(marketStatusCloseEvening, currentDate)).toBe(false)
  })

  it('should return false because there are more then 3 hours to close the market', async () => {
    const currentDate = moment('2022-06-25 07:28')
    expect(isExactHour(marketStatusCloseMorning, currentDate)).toBe(false)
  })

  it('should return false because there are more then 1 hours to close the market', async () => {
    const currentDate = moment('2022-06-25 14:51')
    expect(isExactHour(marketStatusCloseAfternoon, currentDate)).toBe(false)
  })

  it('should return true because there are left exact 12 hours to close the market', async () => {
    const currentDate = moment('2022-06-24 22:30')
    expect(isExactHour(marketStatusCloseMorning, currentDate)).toBe(true)
  })

  it('should return true because there are left exact 6 hours to close the market', async () => {
    const currentDate = moment('2022-06-25 04:30')
    expect(isExactHour(marketStatusCloseMorning, currentDate)).toBe(true)
  })

  it('should return true because there are left exact 3 hours to close the market', async () => {
    const currentDate = moment('2022-07-04 15:00')
    expect(isExactHour(marketStatusCloseEvening, currentDate)).toBe(true)
  })

  it('should return true because there are left exact 1 hour to close the market', async () => {
    const currentDate = moment('2022-06-25 15:00')
    expect(isExactHour(marketStatusCloseAfternoon, currentDate)).toBe(true)
  })
})
