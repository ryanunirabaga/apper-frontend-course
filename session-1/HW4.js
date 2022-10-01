function isPalindrome(wordInput) {

  const reversedWord = reverse(wordInput)

  if (wordInput === reversedWord)
    return true
  return false
}

function reverse(val) {
  const valArray = val.split('')
  const valLength = valArray.length
  let reversedArray = []

  for (let idx = valLength; idx >= 0; idx--) {
    reversedArray.push(valArray[idx])
  }
  return reversedArray.join('')
}

console.log(isPalindrome('racecar'))