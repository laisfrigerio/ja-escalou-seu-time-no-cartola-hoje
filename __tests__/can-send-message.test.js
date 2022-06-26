const moment = require('moment')
const { canSendMessage } = require('../src/bot')

describe('has to send message (closing at evening)', () => {
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
    expect(canSendMessage({ ...payload, status: 2 }, currentDate)).toBe(false)
  })

  it('should return false because closing date is not equal to the current date even though the ball market is open', async () => {
    const currentDate = moment('2022-06-24')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has more than 12 hours to close', async () => {
    const currentDate = moment('2022-06-25 03:45:01')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has more than 12 hours to close', async () => {
    const currentDate = moment('2022-06-25 03:59')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has more than 6 hours to close', async () => {
    const currentDate = moment('2022-06-25 09:57')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has more than 5 hours to close', async () => {
    const currentDate = moment('2022-06-25 10:30')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has more than 3 hours to close', async () => {
    const currentDate = moment('2022-06-25 12:21')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has less than 3 hours to close', async () => {
    const currentDate = moment('2022-06-25 13:17')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has more than 1 hours to close', async () => {
    const currentDate = moment('2022-06-25 14:51')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when the market has less than 1 hours to close', async () => {
    const currentDate = moment('2022-06-25 15:06')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return true when there are 12 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 04:00')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when there are 6 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 10:00')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when there are 3 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 13:00')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when there is 1 hour left to close the market', async () => {
    const currentDate = moment('2022-06-25 15:00')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when the market has less than 30 minutes to close', async () => {
    const currentDate = moment('2022-06-25 15:30')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when the market has less than 15 minutes to close', async () => {
    const currentDate = moment('2022-06-25 15:45')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })
})

describe('has to send message (closing at morning)', () => {
  const payload = {
    status: 1,
    closing: {
      day: 25,
      month: 6,
      year: 2022,
      hour: 10,
      minute: 30
    }
  }

  it('should return false when more than 12 hours left to close the market', async () => {
    const currentDate = moment('2022-06-24 21:30')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when more than 7 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 03:12')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when more than 5 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 05:02')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when more than 2 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 08:26')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })
  
  it('should return false when less than 15 minutes left to close the market', async () => {
    const currentDate = moment('2022-06-25 10:21')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return false when less than 45 minutes left to close the market', async () => {
    const currentDate = moment('2022-06-25 09:38')
    expect(canSendMessage(payload, currentDate)).toBe(false)
  })

  it('should return true when there are 12 hours left to close the market', async () => {
    const currentDate = moment('2022-06-24 22:30')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when there are 6 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 04:30')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when there are 3 hours left to close the market', async () => {
    const currentDate = moment('2022-06-25 07:30')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when the market has less than 30 minutes to close', async () => {
    const currentDate = moment('2022-06-25 10:00')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })

  it('should return true when the market has less than 15 minutes to close', async () => {
    const currentDate = moment('2022-06-25 10:15')
    expect(canSendMessage(payload, currentDate)).toBe(true)
  })
})