const expect = require('chai').expect;
const { romanNumToNum } = require('./romanToDec.js');

describe('Roman number to decimal conversion problem', () => {
	describe('romanNumToNum function returns a correct representation of a roman number in decimal', () => {
		it("It's a function", () => {
			expect(typeof romanNumToNum).to.eql('function');
		});
		it('It returns a number', () => {
			const romanNum = 'LCII';
			const result = romanNumToNum(romanNum);
			expect(typeof result).to.eql('number');
		});
		it('It accepts a string as an argument', () => {
			const romanNum = 'LVCII';
			expect(typeof romanNum).to.eql('string');
		});
		it('Correctly converts roman numerals to decimals (LCII)', () => {
			const romanNum = 'LCII';
			const result = romanNumToNum(romanNum);
			expect(result).to.eql(52);
		});
		it('Correctly converts roman numerals to decimals (VIII)', () => {
			const romanNum = 'VIII';
			const result = romanNumToNum(romanNum);
			expect(result).to.eql(8);
		});
		it('Correctly converts roman numerals to decimals (CDV)', () => {
			const romanNum = 'CDV';
			const result = romanNumToNum(romanNum);
			expect(result).to.eql(405);
		});
	});
});
