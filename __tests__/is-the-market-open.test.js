const { isTheMarketOpen } = require('../src/bot')
const { MARKET_STATUS } = require('../src/const')

describe('verify market is open', () => {
  it('should return false because the market is close', async () => {
    expect(isTheMarketOpen(MARKET_STATUS.close)).toBe(false)
  })

  it('should return true because the market is open', async () => {
    expect(isTheMarketOpen(MARKET_STATUS.open)).toBe(true)
  })
})
