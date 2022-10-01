const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)
// iioeo

function convertToVowels (wordInput) {
  const vowels = ['a','e','i','o','u']
  const wordArray = wordInput.split('')
  let wordVowelsOnly = []

  wordArray.forEach(function(letter) {
    wordVowelsOnly.push(
      ...vowels.filter(vowel => letter === vowel)
    )
  })
  return wordVowelsOnly.join('')
}

// using includes() method
//-------------------------------------------------//
// function convertToVowels (wordInput) {
//   const vowels = ['a','e','i','o','u']
//   const wordArray = wordInput.split('')
//   let wordVowelsOnly = []

//   wordArray.forEach(function(letter) {
//     if (vowels.includes(letter))
//        wordVowelsOnly.push(letter)
//   })
  
//   return wordVowelsOnly.join('')
// }