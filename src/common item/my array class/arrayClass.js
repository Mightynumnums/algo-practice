class MyArray {
	constructor() {
		this.length = 0
		this.data = {}
	}
	get(index) {
		return this.data[index]
	}
	push(item) {
		this.length++
		this.data[this.length-1] = item
		return this.data[item]
	}
	pop() {
		let lastItem = this.data[this.length-1]
		delete this.data[this.length-1]
		this.length--
	}
	delete(index) {
		const item = this.data[index]
		this.shiftItems()
	}
	shiftItems(index) {
		for(let i = index; i < this.length-1; i++) {
			this.data[i] = this.data[i+1]
		}
		delete this.data[this.length-1]
		this.length--
	}
}