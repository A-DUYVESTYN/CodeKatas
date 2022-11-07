const numerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function solution (roman) {
  // string roman numeral into an integer
  let output = 0;

  roman.split("").forEach((e,i,arr) => {
    currVal = numerals[e]
    prevVal = numerals[arr[i-1]]
    output += numerals[e]
    if (currVal > prevVal) output -= 2 * prevVal;
  });
	return output;
}

console.log(solution('XXI'), " should be 21")
console.log(solution('IV'), " should be 4")
console.log(solution('MDCLXVI'), " should be 1666")
console.log(solution('MCMXC'), " should be 1990")
