// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word){
  const charCount = {};
  const lower = word.toLowerCase().split("");

  lower.map(
    element =>  
    (Object.keys(charCount).includes(element)) 
    ? charCount[element] += 1 
    : charCount[element] = 1
  );

  return lower.map(x => (charCount[x] > 1) ? ")" : "(").join("");
  
};

// // clever solution: check if first and last index of char are the same, if so, char appreas only once.
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }

console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));



