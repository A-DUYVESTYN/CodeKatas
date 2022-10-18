// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.


function findOutlier(integers){
// if the sum of the modulus of the first three numbers is < 2, the numbers are even, and the outlier is odd
  const outlier = 
    integers.slice(0,3).reduce((prev,curr) => prev + Math.abs(curr % 2), 0) < 2
    ? 1 
    : 0
  
  for (const num of integers) {
    if (Math.abs(num % 2) === outlier) return num
  }
}

// // a clean solution but iterates through the array twice
// function findOutlier(int){
//   var even = int.filter(a=>a%2==0);
//   var odd = int.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }



// Test Case Should return: 11 (the only odd number)
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))

// Test Case Should return: 42849258 (the only even number)
console.log(findOutlier([88584085,77549113,-133918087,63043843,58709201,123663749,-31814241,6342609,156288055,175521593,163225413,-72968851,150160951,156702107,62336763,37301963,-160785667,84107077,153370301,-34726703,-94762239,25454175,-66423391,39874573,-181748163,42849258,173178413,-182330871,-112708959,160322137,152711783,-162322087,66428345,-171615833,-56176917]))
