const expect = require('chai').expect
const { HashTable }  = require('./hashTable.js')

describe('My Hash Table', () => {
  describe('Has a _hash function that creates a "bucket" address', () => {
    let newHashTable
    beforeEach(() => {
      newHashTable = new HashTable(50)
    });

    it('Returns the correct bucket when something gets ran through the _hash function based on the size of the hashTable', () => {
      expect(newHashTable._hash('apple')).to.eql(14)
    })
    it('Returns the correct bucket when something gets ran through the _hash function based on the size of the hashTable', () => {
      expect(newHashTable._hash('trees')).to.eql(29)
    })
  })
  describe('Has a SET method that adds key and value to an appropriate bucket', () => {
    it('Adds the key and value to a bucket', () => {
      let newHashTable = new HashTable(2)
      newHashTable.set('grapes', 10000)
      expect(newHashTable.data).to.eql([,[ [ 'grapes', 10000 ]]])
    })
    it('Resolves collisions', () => {
      let newHashTable = new HashTable(2)
      newHashTable.set('grapes', 10000)
      newHashTable.set('grappes', 56)
      expect(newHashTable.data).to.eql([ ,[ [ 'grapes', 10000 ], [ 'grappes', 56 ] ] ])
    })
  })

  describe('Has a GET method, which retrieves the value from the bucket give the key', () => {
    it('Returns the correct value if there is only one piece of data in the bucket', () => {
      let newHashTable = new HashTable(50)
      newHashTable.set('grapes', 10000)
      let value = newHashTable.get('grapes')
      expect(value).to.eql(10000)
    })
    it('Returns the correct value if there are multiple pieces of data in the bucket', () => {
      let newHashTable = new HashTable(2)
      newHashTable.set('grapes', 10000)
      newHashTable.set('two', 2)
      let value = newHashTable.get('two')
      expect(value).to.eql(2)
    })
  })

})
