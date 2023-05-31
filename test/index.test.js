const { print } = require('../index')

describe('print', () => {
	it('should return a string', () => {
		expect(typeof print()).toBe('string')
	})
  it('should return a specific value', () => {
    expect(print()).toBe('Hello World!!')
  })
})
