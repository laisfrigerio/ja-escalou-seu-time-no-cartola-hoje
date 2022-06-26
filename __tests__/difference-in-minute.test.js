const moment = require('moment')
const { differenceInMinute } = require('../src/bot')
const { marketStatusCloseEvening } = require('../__mocks__/mock-cartola')

describe('difference in minutes equal to target', () => {
  const payload = marketStatusCloseEvening

  it('should return false because the diff is not equals to 56', async () => {
    const currentDate = moment('2022-07-04 17:05')
    expect(differenceInMinute(payload, currentDate, 56)).toBe(false)
  })

  it('should return true because the diff is equals to 60', async () => {
    const currentDate = moment('2022-07-04 17:00')
    expect(differenceInMinute(payload, currentDate, 60)).toBe(true)
  })

  it('should return true because the diff is equals to 30', async () => {
    const currentDate = moment('2022-07-04 17:30')
    expect(differenceInMinute(payload, currentDate, 30)).toBe(true)
  })

  it('should return true because the diff is equals to 15', async () => {
    const currentDate = moment('2022-07-04 17:45')
    expect(differenceInMinute(payload, currentDate, 15)).toBe(true)
  })
})