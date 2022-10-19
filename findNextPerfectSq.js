function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const root = Math.sqrt(sq)
  if (!Number.isInteger(root)) {
    return -1
  }
  return (root + 1)**2;
}

console.log(findNextSquare(121), " should be 144");
console.log(findNextSquare(625), "should be 676");
console.log(findNextSquare(155), "should be -1");