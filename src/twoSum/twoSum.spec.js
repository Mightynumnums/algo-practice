const expect = require('chai').expect
const {
  twoSum
} = require('./twoSum.js')

describe('Two Sum Problem', () => {

  describe('twoSum returns a an array of arrays that add up to the sum', () => {
    it("It's a function", () => {
      const array = [3, 5, 2, -4, 8, 11, 11, 0, 7]
      const sumNum = 7
      const result = twoSum(array, sumNum)
      expect(typeof twoSum).to.eql('function')
    })
    it('Takes in an array as the first argument', () => {
      const array = [3, 5, 2, -4, 8, 11, 11, 0, 7]
      expect(Array.isArray(array)).to.eql(true)
    })
    it('Can take an empty array as the first argument', () => {
      const array = []
      expect(Array.isArray(array)).to.eql(true)
    })
    it('If array is empty, throws an error', () => {
      const array = []
      const sumNum = 77
      expect(() => twoSum(array, sumNum)).to.throw()
    })
    it('Returns an array', () => {
      const array = [3, 5, 15, 66, 2, -4, 8, 11, 11, 0, 7]
      const sumNum = 22
      const result = twoSum(array, sumNum)
      expect(Array.isArray(result)).to.eql(true)
    })
    it('Returns a correct array', () => {
      const array = [3, 5, 2, -4, 8, 11, 11, 0, 7]
      const sumNum = 7
      const result = twoSum(array, sumNum)
      expect(result).to.eql([ [ 2, 5 ], [ 11, -4 ], [ 7, 0 ] ])
    })
  })
})