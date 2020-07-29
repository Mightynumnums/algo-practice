const expect = require('chai').expect
const { Node, DoublyLinkedList } = require('./doublyLinkedList.js')

describe('Doubly Linked List', () => {
	describe('Adds a new node', () => {
		it('Adds a new node', () => {
			const newDList = new DoublyLinkedList(10)
			expect(newDList).to.eql({
				head: { value: 10, next: null, prev: null },
				tail: { value: 10, next: null, prev: null },
				length: 1,
			})
		})
		it('Adds a value to the head', () => {
			const newDList = new DoublyLinkedList(5)
			expect(newDList.head.value).to.eql(5)
		})
		it('Has correct next pointers', () => {
			const newDList = new DoublyLinkedList(5)
			expect(newDList.head.next).to.eql(null)
		})
		it('Has correct length', () => {
			const newDList = new DoublyLinkedList(5)
			expect(newDList.length).to.eql(1)
		})
	})
	describe('APPEND Method', () => {
		it('After a new node gets added to the list, it has correct length', () => {
			const newDList = new DoublyLinkedList(5)
			newDList.append(6)
			expect(newDList.length).to.eql(2)
		})
		it('After a new node gets added to the list, it has correct length', () => {
			const newDList = new DoublyLinkedList(5)
			newDList.append(6)
			newDList.append(7)
			newDList.append(8)
			expect(newDList.length).to.eql(4)
		})
		it('After a new node gets added to the list, has a prev pointer', () => {
			const newDList = new DoublyLinkedList(5)
			newDList.append(6)
			expect(newDList.head.prev).to.eql(null)
		})
		it('After a new node gets added to the list, the tail.next is null', () => {
			const newDList = new DoublyLinkedList(5)
			newDList.append(6)
			newDList.append(7)
			expect(newDList.tail.next).to.eql(null)
		})
		it('Has the correct next value', () => {
			const newDList = new DoublyLinkedList(5)
			newDList.append(6)
			newDList.append(7)
			expect(newDList.head.next.next.value).to.eql(7)
		})
		it('Has the correct prev value pointer when looking at the tail', () => {
			const newDList = new DoublyLinkedList(3)
			newDList.append(4)
			newDList.append('apple')
			expect(newDList.tail.prev.value).to.eql(4)
		})
	})
	describe('PREPEND Method', () => {
		it('Adds a correct value to the front of the Doubly Linked List', () => {
			const newDList = new DoublyLinkedList(2)
			newDList.append(4)
			newDList.prepend(3)
			expect(newDList.head.value).to.eql(3)
		})
		it('Adds a correct value to the front of the Doubly Linked List', () => {
			const newDList = new DoublyLinkedList(2)
			newDList.append(4)
			newDList.prepend(3)
			newDList.prepend('apple')
			newDList.prepend('lime')
			expect(newDList.head.value).to.eql('lime')
		})
		it('Inserts values into the List correctly', () => {
			const newDList = new DoublyLinkedList(2)
			newDList.append(4)
			newDList.prepend(3)
			newDList.prepend('apple')
			newDList.prepend('lime')
			expect(newDList.tail.value).to.eql(4)
		})
	})
	describe('PRINT LIST Method', () => {
		it('Returns an array', () => {
			const newDList = new DoublyLinkedList(2)
			newDList.append(4)
			newDList.prepend(3)
			newDList.prepend('apple')
			newDList.prepend('lime')
			let result = newDList.printList()
			expect(Array.isArray(result)).to.eql(true)
		})
		it('Prints an array of values in the Doubly Linked List', () => {
			const newDList = new DoublyLinkedList(2)
			newDList.append(4)
			newDList.prepend(3)
			newDList.prepend('apple')
			newDList.prepend('lime')
			let result = newDList.printList()
			expect(result).to.eql(['lime', 'apple', 3, 2, 4])
		})
	})
	describe('INSERT Method', () => {
		it('Inserts a value at any provided index', () => {
			const newDList = new DoublyLinkedList(2)
			newDList.append(4)
			newDList.prepend(3)
			newDList.prepend('apple')
			newDList.prepend('lime')
			newDList.insert(3, 'Muppet')
			let result = newDList.printList()
			expect(result[3] === 'Muppet').to.eql(true)
		})
		it('Inserts a value at any provided index', () => {
			const newDList = new DoublyLinkedList(0)
			newDList.append(4)
			newDList.prepend(3)
			newDList.prepend('apple')
			newDList.prepend('lime')
			newDList.insert(1, 'ZERO')
			let result = newDList.printList()
			expect(result[1] === 'ZERO').to.eql(true)
		})
		it('If index provided is larger than the amount of nodes, the value will be undefined and the node will be inserted at the end of the list', () => {
			const newDList = new DoublyLinkedList(0)
			newDList.append(4)
			newDList.prepend(3)
			newDList.prepend('apple')
			newDList.prepend('lime')
			newDList.insert(9, 'ZERO')
			let result = newDList.printList()
			expect(result[9]).to.eql(undefined)
		})
		it('If index provided is larger than the amount of nodes, the value will be undefined and the node will be inserted at the end of the list', () => {
			const newDList = new DoublyLinkedList(0)
			newDList.append(4)
			newDList.append(3)
			newDList.insert(6, 'Eggs')
			let result = newDList.printList()
			expect(result[3]).to.eql('Eggs')
		})
		it('Has the right length', () => {
			const newDList = new DoublyLinkedList(0)
			newDList.append(4)
			newDList.append(3)
			newDList.insert(5, 'Twix')
			newDList.insert(6, 'Churn')
			newDList.insert(2, 'Shwamps')
			expect(newDList.length).to.eql(6)
		})
	})
	describe('REMOVE Method', () => {
		it('Removes nodes from the Doubly Linked List', () => {
			const newDList = new DoublyLinkedList(0)
			newDList.append(4)
			newDList.append(3)
			newDList.insert(5, 'Twix')
			newDList.remove(2)
			expect(newDList.length === 3).to.eql(true)
		})
		it("Throws an error if a user is trying to remove a node that doesn't exist", () => {
			const newDList = new DoublyLinkedList(0)
			newDList.append(4)
			newDList.append(3)
			newDList.insert(5, 'Twix')
			expect(() => newDList.remove(9)).to.throw()
		})
	})
})
