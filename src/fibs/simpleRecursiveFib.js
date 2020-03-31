/*
  Write a recursive fibonacci function that correctly calculates the correct fib number
  --- what is fib?
  By definition, the first two Fibonacci numbers are 0 and 1, and each remaining number is the sum of the previous two. Some sources omit the initial 0, instead beginning the sequence with two 1s. For n = 0 it is clearly 0: F(0) = (1 - 1) / sqrt(5) = 0
*/

const fib = (num) => {
	if (num === 0) {
		return 0;
	}
	if (num <= 2) {
		return 1
	} else {
		return fib(num - 1) + fib(num - 2)
	}
}

/*
  Write a function, where given a number, you get an array of fibonacci sequences
*/

const fibSec = (num) => {
	if (num === 1) {
		return [0, 1]
	} else {
		let sec = fibSec(num - 1)
		sec.push(sec[sec.length - 1] + sec[sec.length - 2])
		return sec
	}
}


module.exports = {
  fib,
  fibSec
}