const expect = require('chai').expect;
const { sortTwoArrays } = require('./sort.js');

describe('Sort Two Presorted Arrays', () => {
	it('Accepts two arguments', () => {
		expect(sortTwoArrays.length).to.eql(2);
	});
	it('Returns an array', () => {
		const result = sortTwoArrays([1, 2, 6], [3, 6, 8]);
		expect(Array.isArray(result)).to.eql(true);
	});
	it('Returns array that is not empty if one is empty (arr1.length === 0)', () => {
		let arr1 = [];
		let arr2 = [2, 3, 5, 6];
		const result = sortTwoArrays(arr1, arr2);
		expect(result).to.eql(arr2);
	});
	it('Returns array that is not empty if one is empty (arr2.length === 0)', () => {
		let arr1 = [4, 6, 7, 8];
		let arr2 = [];
		const result = sortTwoArrays(arr1, arr2);
		expect(result).to.eql(arr1);
	});
	it('Returns arrays sorted correctly', () => {
		const result = sortTwoArrays([1, 2, 4, 5], [3, 4, 6, 7, 8]);
		expect(result).to.eql([1, 2, 3, 4, 4, 5, 6, 7, 8]);
	});
	it('Returns arrays sorted correctly', () => {
		const result = sortTwoArrays([5, 12, 14], [0, 1, 3, 6]);
		expect(result).to.eql([0, 1, 3, 5, 6, 12, 14]);
	});
});
