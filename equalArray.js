//Given two arrays a and b, write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a, squared, regardless of the order.
function comp(array1, array2){
  if (!array1 || !array2) {
    return false
  }
  if (array1.length !== array2.length) {
    return false
  }
 
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  console.log(array1[4000])
  console.log(array2)

  for (i in array1) {
    if (Math.pow(array1[i],2) != array2[i]) {
      return false
    }
  }
  return true
}


a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2), " Should be true");

b1 = [121, 144, 19, 161, 19, 144, 19, 11];
b2 = [11*12, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(b1, b2), " Should be false");

c1 = [2, 4, 3, 4, 7, 5, 2, 9, 0, 3, 1, 1, 6, 9, 8, 10, 9, 3, 5, 0, 5, 5, 0, 5, 3] 
c2 = [9, 1, 0, 9, 16, 1, 81, 25, 25, 0, 36, 64, 25, 0, 16, 4, 4, 9, 81, 25, 9, 100, 49, 81, 25]
console.log(comp(c1, c2), " Should be true");
