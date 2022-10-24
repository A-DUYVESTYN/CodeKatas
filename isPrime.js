// input: a positive or negative integer, or zero
// output: boolean indicating if input is prime
function isPrime (num) {
  if (num <= 1 ) return false

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}



console.log(isPrime(1))  /* false */
console.log(isPrime(2))  /* true  */
console.log(isPrime(73)) /* true */
console.log(isPrime(75)) /* false */
console.log(isPrime(-1)) /* false */
console.log(isPrime(4)) /* false */
console.log(isPrime(3)) /* true */
