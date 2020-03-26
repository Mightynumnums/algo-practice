const expect = require('chai').expect
const {
  textToBin,
  moreZeros
} = require('./moreZerosThanOnes.js')

describe('More Than Zeros Problem', () => {

  describe('Correctly converts characters to binary value testing the textToBin function', () => {
    it('Convert a capital letter character to binary', () => {
      expect(typeof textToBin).to.eql('function')
    })
    it('Returns a string representation of a binary number', () => {
      const text = 'A'
      const binaryVal = textToBin(text)
      expect(typeof binaryVal ).to.eql('string')
    })
    it('Returns a correct binary value of a character (A)', () => {
      const text = 'A'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('01000001')
    })
    it('Returns a correct binary value of a character (b)', () => {
      const text = 'b'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('01100010')
    })
    it('Returns a correct binary value of a character (!)', () => {
      const text = '!'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('00100001')
    })
    it('Returns a correct binary value of a character (3)', () => {
      const text = '3'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('00110011')
    })
    it('Returns a correct binary value of a character (>)', () => {
      const text = '>'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('00111110')
    })
    it('Returns a correct binary value of a character (*)', () => {
      const text = '*'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('00101010')
    })
  })

  describe('function moreZeros', () => {
    describe('moreZeros function correctly returns an array with characters whos binary values have more zeros than ones', () => {
      it('It is a function', () => {
        expect(typeof moreZeros).to.eql('function')
      })

      it('Returns an array', () => {
        const str = 'abcde'
        const result = moreZeros(str)
        expect(Array.isArray(result)).to.eql(true)
      })
      it('Returns a correct array given a string with spaces', () => {
        const str = 'Great job!'
        const result = moreZeros(str)
        expect(result).to.eql(['a', ' ', 'b', '!'])
      })
      it('Returns a correct array given a string with all caps', () => {
        const str = 'DIGEST'
        const result = moreZeros(str)
        expect(result).to.eql(['D','I','E','T'])
      })
      it('Returns a correct array given a string with duplicates', () => {
        const str = 'DDDDDDDDIGESSSSSST'
        const result = moreZeros(str)
        expect(result).to.eql(['D','I','E','T'])
      })
      it('Returns a correct array given a string with numbers', () => {
        const str = 'abc3de4'
        const result = moreZeros(str)
        expect(result).to.eql(['a', 'b', 'd'])
      })
    })
  })

})