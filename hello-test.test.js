const { hello } = require('./hello')

describe('Hello', () => {
  it('returns "Hello, world"', () => {
    const gretting = hello()
    expect(gretting).toBe('Hello, world')
  })
})