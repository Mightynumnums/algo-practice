/*
Given a roman numeral notation, convert it to the regular decimal representation.
*/

const romanNumToNum = (roman) => {
	const romNumDict = {
		M: 1000,
		D: 500,
		C: 100,
		L: 50,
		X: 10,
		V: 5,
		I: 1,
	};

	let array = roman.split('');
	let ttl = 0;

	for (let i = 0; i < array.length; i++) {
		let current = array[i];
		let currentVal = romNumDict[current];
		let next = array[i + 1];
		let nextVal = romNumDict[next];

		if (nextVal === undefined) {
			nextVal = 0;
		}

		if (currentVal < nextVal) {
			ttl -= currentVal;
		} else {
			ttl += currentVal;
		}
	}
	return ttl;
};

module.exports = {
	romanNumToNum,
};
