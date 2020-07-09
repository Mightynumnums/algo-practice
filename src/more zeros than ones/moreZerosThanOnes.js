/*
Create a moreZeros function which will receive a string for input, and return an array containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False

        --> ['a','b','d']

'DIGEST'--> ['D','I','E','T']

All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

const textToBin = (text) => {
	return Array.from(text)
		.reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
		.map((bin) => '0'.repeat(8 - bin.length) + bin)
		.join(' ');
};

const moreZeros = (str) => {
	let numbers = '1234567890';
	let strArr = str.split('');
	str = [...new Set(strArr)].join('');
	let finalArr = [];
	let newNewArr = [];

	let binArr = textToBin(str).split(' ');

	for (let i = 0; i < binArr.length; i++) {
		let count = {};
		let binCharStr = binArr[i];
		for (let j = 0; j < binCharStr.length; j++) {
			let numChar = binCharStr[j];
			if (!count[numChar]) {
				count[numChar] = 1;
			} else {
				count[numChar] += 1;
			}
		}
		if (count['0'] > count['1']) {
			finalArr.push(str[i]);
		}
	}
	for (let i = 0; i < finalArr.length; i++) {
		if (!numbers.includes(finalArr[i])) {
			newNewArr.push(finalArr[i]);
		}
	}
	return newNewArr;
};

module.exports = {
	textToBin,
	moreZeros,
};
