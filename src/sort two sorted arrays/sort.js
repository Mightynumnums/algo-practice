/* Write a function that will merge two already sorted arrays into one sorted array
  Example: [0,3,4,31],[4,6,30] ==>[0,3,4,4,30,31]
*/

const sortTwoArrays = (arr1, arr2)  => {
  const sorted = []
  if (arr1.length === 0) {
    return arr2
  }
  if (arr2.length === 0) {
    return arr1
  }

  let itemArr1 = arr1[0]
  let itemArr2 =  arr2[0]
  let i = 1
  let j = 1

  while (itemArr1 || itemArr2) {
    if (itemArr2 === undefined || itemArr1 < itemArr2) {
      sorted.push(itemArr1)
      itemArr1 = arr1[i]
      i++
    } else {
      sorted.push(itemArr2)
      itemArr2 = arr2[j]
      j++
    }
  }
  return sorted
}

module.exports = {
  sortTwoArrays
}