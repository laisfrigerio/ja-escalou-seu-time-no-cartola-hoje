const moment = require('moment')
const { isExactMinute } = require('../src/bot')
const {
  marketStatusCloseAfternoon,
  marketStatusCloseEvening,
  marketStatusCloseMorning
} = require('../__mocks__/mock-cartola')

describe('is one of those exact minute: 30 or 15 minutes before closing the market', () => {
  it('should return false because there are more then 30 minutes to close the market', async () => {
    const currentDate = moment('2022-07-04 17:29')
    expect(isExactMinute(marketStatusCloseEvening, currentDate)).toBe(false)
  })

  it('should return false because there are more then 15 minutes to close the market', async () => {
    const currentDate = moment('2022-06-25 10:08')
    expect(isExactMinute(marketStatusCloseMorning, currentDate)).toBe(false)
  })

  it('should return true because there are left exact 30 minutes to close the market', async () => {
    const currentDate = moment('2022-06-25 15:30')
    expect(isExactMinute(marketStatusCloseAfternoon, currentDate)).toBe(true)
  })

  it('should return true because there are left exact 15 minutes to close the market', async () => {
    const currentDate = moment('2022-06-25 10:15')
    expect(isExactMinute(marketStatusCloseMorning, currentDate)).toBe(true)
  })
})
