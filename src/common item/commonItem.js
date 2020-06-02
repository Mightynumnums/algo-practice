/*
	given two arrays, write a function that returns true or false if the arrays contain any common items
*/

let array1 = ['a','b','c','x']
let array2 = ['l','x','z']
//given those two arrays will return true


let containsCommon = (arr1, arr2) => {
	let longest;
	let shortest;
	if (arr1.length > arr2.length) {
		longest = arr1
		shortest =  arr2
	} else {
		longest = arr2
		shortest = arr1
	}
	let itemObj = {}

	for (let i = 0; i < shortest.length; i++) {
		let item =  shortest[i]
		if (!itemObj[item]) {
			itemObj[item] = 1
		} else {
			itemObj[i]++
		}
	}
	for (let j = 0; j < longest.length; j++) {
		let itemInLongest =  longest[j]
		if (itemObj[itemInLongest]) {
			return true
		}
	}
	return false
}

containsCommon(array1, array2)

//Solution using ES6 *some*
/*
	The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
 */
let containsCommonItem = (arr1, arr2) => {
	return arr1.some(item => arr2.includes(item))
}

containsCommonItem(array1, array2)

module.exports = {
  containsCommon
}