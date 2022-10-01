const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'

function reverse(val) {
  const valArray = val.split('')
  const valLength = valArray.length
  let reversedArray = []

  for (let idx = valLength; idx >= 0; idx--) {
    reversedArray.push(valArray[idx])
  }
  return reversedArray.join('')
}