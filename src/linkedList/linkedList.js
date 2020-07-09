class Node {
	constructor(value) {
		(this.value = value), (this.next = null);
	}
}

class LinkedList {
	constructor(value) {
		(this.head = {
			value: value,
			next: null,
		}),
			(this.tail = this.head);
		this.length = 1;
	}

	append(value) {
		// to the end
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		// to the front
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList() {
		const nodesArr = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			nodesArr.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return nodesArr;
	}

	insert(index, value) {
		const newNode = new Node(value);
		if (index >= this.length) {
			return this.append(value);
		}
		const leader = this.traverseToIndex(index - 1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this;
	}

	traverseToIndex(index) {
		let currentNode = this.head;
		let counter = 0;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		let leader = this.traverseToIndex(index - 1);
		let nodeToRemove = leader.next;
		leader.next = nodeToRemove.next;
		this.length--;
		return this;
	}
}

module.exports = {
	LinkedList,
	Node,
};
