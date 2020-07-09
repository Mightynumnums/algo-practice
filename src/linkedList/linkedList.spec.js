const expect = require('chai').expect;
const { LinkedList, Node } = require('./linkedList.js');

describe('Linked List', () => {
	describe('Creates a new Linked List with value added to the head', () => {
		it('Creates a NEW Node with the value provided', () => {
			let newList = new LinkedList(10);
			expect(newList).to.eql({
				head: { value: 10, next: null },
				tail: { value: 10, next: null },
				length: 1,
			});
		});
		it('Adds a value to the head', () => {
			let newList = new LinkedList(5);
			expect(newList.head.value).to.eql(5);
		});
		it('If the Linked List has just been created with one value, has the length of 1', () => {
			let newList = new LinkedList(9);
			expect(newList.length).to.eql(1);
		});
		it("If the Linked List has just been created with one value, has the head's next set to null", () => {
			let newList = new LinkedList(9);
			expect(newList.head.next).to.eql(null);
		});
		it('If the Linked List has just been created with one value, has the tail set to the head', () => {
			let newList = new LinkedList(9);
			expect(newList.tail.next).to.eql(newList.head.next);
		});
	});
	describe('Has an APPEND Method', () => {
		it('Adds a new node after the head', () => {
			const newList = new LinkedList(5);

			newList.append(6);
			expect(newList).to.eql({
				head: {
					value: 5,
					next: {
						value: 6,
						next: null,
					},
				},
				tail: {
					value: 6,
					next: null,
				},
				length: 2,
			});
		});
		it('Changes the length correctly', () => {
			const newListNode = new LinkedList(5);
			newListNode.append(6);
			newListNode.append(7);
			newListNode.append('apple');
			expect(newListNode.length).to.eql(4);
		});
	});
	describe('Has an PREPEND Method', () => {
		it('Adds a new node as the head (first node)', () => {
			const newListNode = new LinkedList(5);
			newListNode.prepend(6);
			expect(newListNode).to.eql({
				head: {
					value: 6,
					next: {
						value: 5,
						next: null,
					},
				},
				tail: {
					value: 5,
					next: null,
				},
				length: 2,
			});
		});
		it('Adds a new node as the first node(head)', () => {
			const newListNode = new LinkedList(5);
			newListNode.prepend(6);
			newListNode.prepend(7);

			expect(newListNode).to.eql({
				head: {
					value: 7,
					next: { value: 6, next: { value: 5, next: null } },
				},
				tail: { value: 5, next: null },
				length: 3,
			});
		});
	});

	describe('Has PRINT LIST Method', () => {
		it('returns an array of values in the linked list', () => {
			const linkedList = new LinkedList(10);
			linkedList.append(12);
			linkedList.append(14);
			let result = linkedList.printList();
			expect(result).to.eql([10, 12, 14]);
		});
	});

	describe('Has INSERT Method', () => {
		it('Inserts a new node at a provided index with a specified value. If the index provided is bigger than the length, just inserts it at as the last node.', () => {
			const linkedList = new LinkedList(10);
			linkedList.append(12);
			linkedList.append(14);
			let result = linkedList.insert(10, 'bruno');
			expect(result).to.eql({
				head: {
					value: 10,
					next: {
						value: 12,
						next: {
							value: 14,
							next: {
								value: 'bruno',
								next: null,
							},
						},
					},
				},
				tail: {
					value: 'bruno',
					next: null,
				},
				length: 4,
			});
		});

		it('Inserts a new node at a provided index with a specified value.', () => {
			const linkedList = new LinkedList(10);
			linkedList.append(12);
			linkedList.append(14);
			linkedList.append('apple');
			let result = linkedList.insert(2, 'bruno');
			expect(result).to.eql({
				head: {
					value: 10,
					next: {
						value: 12,
						next: {
							value: 'bruno',
							next: {
								value: 14,
								next: {
									value: 'apple',
									next: null,
								},
							},
						},
					},
				},
				tail: {
					value: 'apple',
					next: null,
				},
				length: 5,
			});
		});
	});

	describe('Has a TRAVERSE TO INDEX Method', () => {
		it('provided an index, returns the node at that index on the linked list', () => {
			const linkedList = new LinkedList(10);
			linkedList.append(12);
			linkedList.append(14);
			linkedList.append('apple');
			linkedList.append('tree');
			let result = linkedList.traverseToIndex(2);
			expect(result).to.eql({
				value: 14,
				next: {
					value: 'apple',
					next: {
						value: 'tree',
						next: null,
					},
				},
			});
		});
	});

	describe('Has a REMOVE method', () => {
		it('Removes a node correctly at an index provided', () => {
			const linkedList = new LinkedList(6);
			linkedList.append('apple');
			linkedList.append('tree');
			let result = linkedList.remove(2);
			expect(result).to.eql({
				head: { value: 6, next: { value: 'apple', next: null } },
				tail: { value: 'tree', next: null },
				length: 2,
			});
		});
	});
});
