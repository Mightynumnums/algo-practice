const expect = require('chai').expect
const {
  Item,
  PQ,
  simple

} = require('./myPriorityQ.js')



describe('My Priority Q', () => {

  describe('first test', () => {
    it('tests the sum', () => {
      const num = 2
      const result = simple(2)
      expect(result).to.eql(4)
    })
  })
  //add real tests here



})







// let pqueu = new PQ()
// console.log(pqueu)
// pqueu.add('banana', 10)
// pqueu.add('apple', 100)
// pqueu.add('nuts', 3)
// pqueu.add('why couldnt u do it yesterday?',1)
// console.log(pqueu)
// console.log(pqueu.pop())