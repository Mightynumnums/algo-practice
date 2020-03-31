const expect = require('chai').expect
const {
  fib,
  fibSec
 } = require('./simpleRecursiveFib.js')

describe('Recursive Fibonacci problems', () => {

  describe('fib', () => {
    it("It's a function", () => {
      expect(typeof fib).to.eql('function')
    })
    it("It accepts a number as an argument", () => {
      const arg = 3
      expect(typeof arg).to.eql('number')
    })
    it("It returns 1 if the argument is 2", () => {
      const arg = 2
      const result = fib(arg)
      expect(result).to.eql(1)
    })
    it("It returns 1 if the argument is 1", () => {
      const arg = 1
      const result = fib(arg)
      expect(result).to.eql(1)
    })
    it("It returns 0 if the argument is 0", () => {
      const arg = 0
      const result = fib(arg)
      expect(result).to.eql(0)
    })
    it("It correctly returns the fib number", () => {
      const arg = 22
      const result = fib(arg)
      expect(result).to.eql(17711)
    })
    it("It correctly returns the fib number", () => {
      const arg = 5
      const result = fib(arg)
      expect(result).to.eql(5)
    })
    it("It correctly returns the fib number", () => {
      const arg = 12
      const result = fib(arg)
      expect(result).to.eql(144)
    })
       it("It returns a number", () => {
      const arg = 12
      const result = fib(arg)
      expect(typeof result).to.eql('number')
    })
  })

  describe('fibSec', () => {
    it("It's a function", () => {
      expect(typeof fibSec).to.eql('function')
    })
    it("It accepts a number as an argument", () => {
      const arg = 3
      expect(typeof arg).to.eql('number')
    })
    it("It returns [0, 1] if the argument is 1", () => {
      const arg = 1
      const result = fibSec(arg)
      expect(result).to.eql([0,1])
    })
    it("It returns an array", () => {
      const arg = 1
      const result = fibSec(arg)
      expect(Array.isArray(result)).to.eql(true)
    })
    it("It returns a correct array", () => {
      const arg = 3
      const result = fibSec(arg)
      expect(result).to.eql([ 0, 1, 1, 2 ])
    })
    it("It returns a correct array", () => {
      const arg = 13
      const result = fibSec(arg)
      expect(result).to.eql([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ])
    })
  })
})