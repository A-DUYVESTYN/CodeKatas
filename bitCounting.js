var countBits = function(n) {
  
  return n.toString(2).split("").reduce( (prevNum, num) =>  prevNum + Number(num), 0);
};

console.log(countBits(10))