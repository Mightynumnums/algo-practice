/*
  Write a function, given an array and a target sum, that returns an array of arrays, that add up to that target sum. No duplicates.
*/
const twoSum = (array, sumNum) => {
	if (!array.length) {
		throw new Error('Array is empty.');
	}
	//get rid of dupes
	array = new Set(array);
	// const arr = Array.from(array)
	const arr = [...array]; //or spread that shiz
	const sums = [];
	const hashTable = {};

	for (let i = 0; i < arr.length; i++) {
		let numInArr = arr[i];
		const sumMinusElement = sumNum - numInArr;
		if (hashTable[sumMinusElement.toString()] !== undefined) {
			sums.push([numInArr, sumMinusElement]);
		}
		hashTable[numInArr.toString()] = numInArr;
	}
	return sums;
};

module.exports = {
	twoSum,
};
