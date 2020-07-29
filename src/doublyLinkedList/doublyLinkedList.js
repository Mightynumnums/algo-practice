class Node {
	constructor(value) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		}
		this.tail = this.head
		this.length = 1
	}

	append(value) {
		// to the end
		const newNode = new Node(value)
		newNode.prev = this.tail
		this.tail.next = newNode
		this.tail = newNode

		this.length++
		return this
	}

	prepend(value) {
		// to the front
		const newNode = new Node(value)
		newNode.next = this.head
		this.head.prev = newNode
		this.head = newNode
		this.length++
		return this
	}

	printList() {
		const nodesArr = []
		let currentNode = this.head
		while (currentNode !== null) {
			nodesArr.push(currentNode.value)
			currentNode = currentNode.next
		}
		return nodesArr
	}

	insert(index, value) {
		const newNode = new Node(value)
		if (index >= this.length) {
			return this.append(value)
		}
		const leader = this.traverseToIndex(index - 1)
		const follower = leader.next
		leader.next = newNode
		newNode.prev = leader
		newNode.next = follower
		follower.prev = newNode
		this.length++
		return this
	}

	traverseToIndex(index) {
		let currentNode = this.head
		let counter = 0
		while (counter !== index) {
			currentNode = currentNode.next
			counter++
		}
		return currentNode
	}

	remove(index) {
		if (this.head === null || index > this.length - 1) {
			throw new RangeError(`Index ${index} does not exist in the list.`)
		}

		if (index === 0) {
			if (this.head === null) {
				this.tail = null
				this.length--
			} else {
				this.head.value = null
				this.head.previous = null
				this.head.next = null
				this.length--
			}
			return this
		}

		let current = this.head
		let i = 0
		while (current !== null && i < index) {
			current = current.next
			i++
		}
		if (current !== null) {
			current.prev.next = current.next
		}
		if (this.tail === current) {
			this.tail = current.prev
		} else {
			current.next.prev = current.prev
			this.length--
		}
		return this
	}

	reverse() {
		if (!this.head.next) {
			return this.head
		}
		let first = this.head
		this.tail = this.head
		let second = first.next

		while (second) {
			let temp = second.next
			second.next = first
			first = second
			second = temp
		}
		this.head.next = null
		this.head = first
		return this
	}
}

module.exports = {
	DoublyLinkedList,
	Node,
}
