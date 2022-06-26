const moment = require('moment')
const { differenceInHour } = require('../src/bot')
const { marketStatusCloseEvening } = require('../__mocks__/mock-cartola')

describe('difference in hour equal to target', () => {
  const payload = marketStatusCloseEvening

  it('should return false because the diff is not equals to 1 hour', async () => {
    const currentDate = moment('2022-07-04 16:59')
    expect(differenceInHour(payload, currentDate, 1)).toBe(false)
  })

  it('should return false because the diff is not equals to 3 hour', async () => {
    const currentDate = moment('2022-07-04 14:41')
    expect(differenceInHour(payload, currentDate, 1)).toBe(false)
  })

  it('should return true because the diff is equals to 1 hour', async () => {
    const currentDate = moment('2022-07-04 17:00')
    expect(differenceInHour(payload, currentDate, 1)).toBe(true)
  })

  it('should return true because the diff is equals to 3 hour', async () => {
    const currentDate = moment('2022-07-04 15:00')
    expect(differenceInHour(payload, currentDate, 3)).toBe(true)
  })

  it('should return true because the diff is equals to 6', async () => {
    const currentDate = moment('2022-07-04 12:00')
    expect(differenceInHour(payload, currentDate, 6)).toBe(true)
  })

  it('should return true because the diff is equals to 12', async () => {
    const currentDate = moment('2022-07-04 06:00')
    expect(differenceInHour(payload, currentDate, 12)).toBe(true)
  })
})
