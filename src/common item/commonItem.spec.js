const expect = require('chai').expect
const { commonItem } = require('./commonItem')

describe('Common Item in an array problem', () => {
  describe('commonIem', () => {
    it('accepts two arguments', () => {
      let arg1 = [1,2,3]
      let arg2 = [3,4,5,6]
      let arguments = [arg1, arg2]
      expect(arguments.length).to.eql(2)
    })
    it('checks that both arguments are arrays (both are)', () => {
      let arg1 = [1,2,3]
      let arg2 = []
      expect(Array.isArray(arg1) && Array.isArray(arg2)).to.eql(true)
    })
    it('checks that both arguments are arrays (one is not)', () => {
      let arg1 = [1,2,3]
      let arg2 = 'apple'
      expect(Array.isArray(arg1) && Array.isArray(arg2)).to.eql(false)
    })
  })
})