const moment = require('moment')
const { isExactPeriod } = require('../src/bot')
const {
  marketStatusCloseAfternoon,
  marketStatusCloseEvening,
  marketStatusCloseMorning
} = require('../__mocks__/mock-cartola')

describe('is one of those exact period: hours (1, 6, 3 and 1) or minutes (30 and 15) before closing the market', () => {
  it('should return false because there are more then 12 hours to close the market', async () => {
    const currentDate = moment('2022-06-24 20:02')
    expect(isExactPeriod(marketStatusCloseMorning, currentDate)).toBe(false)
  })

  it('should return false because there are more then 6 hours to close the market', async () => {
    const currentDate = moment('2022-07-04 09:15')
    expect(isExactPeriod(marketStatusCloseEvening, currentDate)).toBe(false)
  })

  it('should return false because there are more then 3 hours to close the market', async () => {
    const currentDate = moment('2022-07-04 14:31')
    expect(isExactPeriod(marketStatusCloseEvening, currentDate)).toBe(false)
  })

  it('should return false because there are more then 1 hour to close the market', async () => {
    const currentDate = moment('2022-06-25 14:33')
    expect(isExactPeriod(marketStatusCloseAfternoon, currentDate)).toBe(false)
  })

  it('should return false because there are more then 30 minutes to close the market', async () => {
    const currentDate = moment('2022-06-25 09:46')
    expect(isExactPeriod(marketStatusCloseMorning, currentDate)).toBe(false)
  })

  it('should return false because there are more then 15 minutes to close the market', async () => {
    const currentDate = moment('2022-06-25 10:11')
    expect(isExactPeriod(marketStatusCloseMorning, currentDate)).toBe(false)
  })

  it('should return true because there are exact 15 minutes to close the market', async () => {
    const currentDate = moment('2022-07-04 17:45')
    expect(isExactPeriod(marketStatusCloseEvening, currentDate)).toBe(true)
  })

  it('should return true because there are exact 30 minutes to close the market', async () => {
    const currentDate = moment('2022-06-25 15:30')
    expect(isExactPeriod(marketStatusCloseAfternoon, currentDate)).toBe(true)
  })

  it('should return true because there are exact 1 hour to close the market', async () => {
    const currentDate = moment('2022-07-04 17:00')
    expect(isExactPeriod(marketStatusCloseEvening, currentDate)).toBe(true)
  })

  it('should return true because there are exact 3 hours to close the market', async () => {
    const currentDate = moment('2022-06-25 07:30')
    expect(isExactPeriod(marketStatusCloseMorning, currentDate)).toBe(true)
  })

  it('should return true because there are exact 6 hours to close the market', async () => {
    const currentDate = moment('2022-07-04 12:00')
    expect(isExactPeriod(marketStatusCloseEvening, currentDate)).toBe(true)
  })

  it('should return true because there are exact 12 hours to close the market', async () => {
    const currentDate = moment('2022-06-24 22:30')
    expect(isExactPeriod(marketStatusCloseMorning, currentDate)).toBe(true)
  })
})
