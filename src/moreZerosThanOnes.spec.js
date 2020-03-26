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
    it('returns a string representation of a binary number', () => {
      const text = 'A'
      const binaryVal = textToBin(text)
      expect(typeof binaryVal ).to.eql('string')
    })
    it('returns a correct binary value of a character (A)', () => {
      const text = 'A'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('01000001')
    })
    it('returns a correct binary value of a character (b)', () => {
      const text = 'b'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('01100010')
    })
    it('returns a correct binary value of a character (!)', () => {
      const text = '!'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('00100001')
    })
    it('returns a correct binary value of a character (3)', () => {
      const text = '3'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('00110011')
    })
    it('returns a correct binary value of a character (>)', () => {
      const text = '>'
      const binaryVal = textToBin(text)
      expect(binaryVal).to.eql('00111110')
    })
  })

  describe('moreZeros', () => {
    describe('moreZeros function correctly returns an array with characters whos binary values have more zeros than ones', () => {
      it('it is a function', () => {
        expect(typeof moreZeros).to.eql('function')
      })

      it('returns an array', () => {
        const str = 'abcde'
        const result = moreZeros(str)
        expect(Array.isArray(result)).to.eql(true)
      })


    })
  })

})