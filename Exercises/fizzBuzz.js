function fizzBuzz (val) {

    if (val <= 0)
        return

    if (val % 15 === 0 ) 
        return "FizzBuzz"
    else if (val % 3 === 0) 
        return "Fizz"
    else if (val % 5 === 0)
        return "Buzz"
    else
        return ""
}
console.log(fizzBuzz(0))