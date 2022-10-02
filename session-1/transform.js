const nums = [4, 9, 5, 3, 8]
const sortedSquaredNums = transform(nums)
console.log(sortedSquaredNums)

function transform(numArray) {
  const sqrdNums = numArray.sort().map(srtNums => srtNums * srtNums)
  return sqrdNums
}