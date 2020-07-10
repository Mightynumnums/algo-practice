class HashTable {
	constructor(size) {
		this.data = new Array(size)
	}

	//create a hashing function
	_hash(key) {
		let hash = 0
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash
	}
	//adds the keys and values to the "buckets"
	//check to see if any key/values are already at the address, if not just create an array and push the key/value into it, otherwise (if there is a collision), push the key/value into the already existing array (array of arrays at the same address)
	set(key, value) {
		let address = this._hash(key)
		if (!this.data[address]) {
			this.data[address] = []
		}
		this.data[address].push([key, value])
		return this.data
	}

	//get the value
	get(key) {
		let address = this._hash(key)
		let bucketAddress = this.data[address]

		if (!bucketAddress) return undefined

		if (bucketAddress.length === 1) {
			return bucketAddress[0][1]
		}
		if (bucketAddress.length > 1) {
			for (let i = 0; i < bucketAddress.length; i++) {
				let keyName = bucketAddress[i][0]
				if (keyName === key) {
					return bucketAddress[i][1]
				}
			}
		}
	}
	keys() {
		if (!this.data.length) {
			return undefined
		}
		let result = []
		// loop through all the elements
		for (let i = 0; i < this.data.length; i++) {
			// if it's not an empty memory cell
			if (this.data[i] && this.data[i].length) {
				// but also loop through all the potential collisions
				if (this.data.length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						result.push(this.data[i][j][0])
					}
				} else {
					result.push(this.data[i][0])
				}
			}
		}
		return result
	}

	values() {
		if (!this.data.length) {
			return undefined
		}
		let valuesArray = []
		// loop through all the elements
		for (let i = 0; i < this.data.length; i++) {
			// if it's not an empty memory cell
			if (this.data[i] && this.data[i].length) {
				// but also loop through all the potential collisions
				if (this.data.length > 1) {
					for (let j = 0; j < this.data[i].length; j++) {
						valuesArray.push(this.data[i][j][1])
					}
				} else {
					valuesArray.push(this.data[i][0])
				}
			}
		}
		return valuesArray
	}
}

module.exports = {
	HashTable,
}
