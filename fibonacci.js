  // input is number of elements to print
  // start with 0 and 1
  // push the sum of the previous and current element to the array

function fibonacci (numElements) {
  const output = [0, 1]
  for (let i = 1; output.length < elements; i++) {
    output.push(output[i-1] + output[i])
  }
  return output
}

console.log(fibonacci(10))