class HashTable {
	constructor(size) {
    	this.data = new Array(size)
    }

		//create a hashing function
	_hash(key) {
		let hash = 0;
		for (let i =0; i < key.length; i++){
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash;
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

		if(!bucketAddress) return undefined

		if(bucketAddress.length === 1) {
			return bucketAddress[0][1]
		}
		if (bucketAddress.length > 1) {
			for(let i = 0; i < bucketAddress.length; i++) {
				let keyName = bucketAddress[i][0]
				if (keyName === key) {
					return bucketAddress[i][1]
				}
			}
		}
	}
}

module.exports = {
	HashTable
}