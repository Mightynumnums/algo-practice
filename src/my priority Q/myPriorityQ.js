class Item {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PQ {
	constructor() {
		this.data = [];
	}

	add(value, priority) {
		let queueElem = new Item(value, priority);
		let contains = false;

		for (let i = 0; i < this.data.length; i++) {
			let itemPriority = this.data[i].priority;
			if (itemPriority > queueElem.priority) {
				this.data.splice(i, 0, queueElem);
				contains = true;
				break;
			}
		}
		if (!contains) {
			this.data.push(queueElem);
		}
	}

	pop() {
		console.log(
			'Return the itme w the most priority',
			this.data[this.data.length - 1]
		);
		return this.data[this.data.length - 1];
	}
}

const simple = (num) => {
	return num + 2;
};

module.exports = {
	Item,
	PQ,
	simple,
};

// let pqueu = new PQ()
// console.log(pqueu)
// pqueu.add('banana', 10)
// pqueu.add('apple', 100)
// pqueu.add('nuts', 3)
// pqueu.add('why couldnt u do it yesterday?',1)
// console.log(pqueu)
// console.log(pqueu.pop())
