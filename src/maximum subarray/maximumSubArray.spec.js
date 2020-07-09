const expect = require('chai').expect;
const { maxSubArray } = require('./maximumSubArray.js');

describe('Maximum Subarray Sum', () => {
	it('Takes an array array as an argument, throws an error if the argument is not an array', () => {
		let arg = 'This is not an array, but a string';
		expect(() => maxSubArray(arg)).to.throw();
	});
	it('Returns the correct sum', () => {
		let arg = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
		let result = maxSubArray(arg);
		expect(result).to.eql(6);
	});
	it('Returns 0, if the array is empty', () => {
		let arg = [];
		let result = maxSubArray(arg);
		expect(result).to.eql(0);
	});
	it('Returns the only value as the sum if array only has one element', () => {
		let arg = [6];
		let result = maxSubArray(arg);
		expect(result).to.eql(6);
	});
});
