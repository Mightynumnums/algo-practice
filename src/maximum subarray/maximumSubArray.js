/*
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  Example:

  Input: [-2,1,-3,4,-1,2,1,-5,4],
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.
*/

const maxSubArray = function(nums) {
	if (!Array.isArray(nums)) {
		throw new Error('Uh Oh!')
	}

	if (nums.length === 1) {
		return nums[0]
	}
	if (!nums.length) {
		return 0
	}
	let largest = nums[0]
	let bestAtThisTime = -Infinity
	for (let i = 0; i < nums.length; i++) {
		let value = nums[i]
		if (bestAtThisTime < 0) {
			bestAtThisTime = value
		} else {
			bestAtThisTime += value
		}
		if (bestAtThisTime > largest) {
			largest = bestAtThisTime
		}
	}
	return largest
};

module.exports = {
	maxSubArray
}