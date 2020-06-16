const expect = require('chai').expect
const { MyArray } = require('./arrayClass.js')

describe('MyArray Class', () => {
	it('can create a new array from the class constructor', () => {
	const testArrayClass = new MyArray()
		expect(testArrayClass).to.eql({ length: 0, data: {} })
	})
	describe('MyArray Class can add methods', () => {
		let testArray
		beforeEach(() => {
			testArray = new MyArray()
		})
		describe('PUSH Method', () => {
			it('has PUSH method -- adds elements to the array', () => {
				testArray.push('hello')
				expect(testArray).to.eql({ length: 1, data: { '0': 'hello' } })
			})
			it('has PUSH method -- adds elements to the array and records correct length', () => {
				testArray.push('hello')
				testArray.push('old friend')
				expect(testArray.length).to.eql(2)
			})
		});

		describe('GET Method', () => {
			it('has GET method -- returns a value at an index requested', () => {
				testArray.push('hello')
				testArray.push('old friend')
				expect(testArray.get(1)).to.eql('old friend')
			})
			it('has GET method -- returns undefined if index requested does not have data (is not present)', () => {
				testArray.push('hello')
				testArray.push('old friend')
				expect(testArray.get(2)).to.eql(undefined)
			})
		})

		describe('POP Method', () => {
			it('has POP method -- removes the last item from an array when called', () => {
				testArray.push('hello')
				testArray.push('old friend')
				testArray.push('timesies')
				let removed = testArray.pop()
				expect(removed).to.eql('timesies')
			})
			it('has POP method -- alters the length of the array', () => {
				testArray.push('hello')
				testArray.push('old friend')
				testArray.push('timesies')
				testArray.pop()
				expect(testArray.length).to.eql(2)
			})
			it('has POP method -- when pop is called removes the last item', () => {
				testArray.push('hello')
				testArray.push('old friend')
				testArray.push('timesies')
				testArray.push('i should be removed')
				testArray.pop()
				expect(testArray).to.eql(
					{
						length: 3,
						data: {
							'0': 'hello',
							'1': 'old friend',
							'2': 'timesies'
						 }
					 })
			})
		})
		describe('DELETE Method', () => {
			it('Removes an element from an array at a indicated index and decrements the length', () => {
				testArray.push('hello')
				testArray.push('old friend')
				testArray.push('timesies')
				testArray.delete(0)
				expect(testArray.length).to.eql(2)
			})
			it('Removes an element from an array at a correct index', () => {
				testArray.push('hello')
				testArray.push('old friend')
				testArray.push('timesies')
				testArray.delete(0)
				expect(testArray).to.eql({ length: 2, data: { '0': 'old friend', '1': 'timesies' } })
			})
			it('Removes an element from an array at a correct index and returns the removed element', () => {
				testArray.push('hello')
				testArray.push('old friend')
				testArray.push('timesies')
				let deleted = testArray.delete(1)
				expect(deleted).to.eql('old friend')
			})
		})
	})

})