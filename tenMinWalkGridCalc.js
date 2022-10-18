// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// function isValidWalk(walk) {
//   let [x, y, minutes] = [0, 0, 0]
//   for (const direction of walk) {
//     direction === 'e' && x++
//     direction === 'w' && x--
//     direction === 'n' && y++
//     direction === 's' && y--
//     minutes++
//     console.log(`direction:${direction}, x:${x}, y:${y}, minutes:${minutes}`)
//   }
//   return (!x && !y && minutes === 10)
// }

function isValidWalk(walk) {
  let [x, y, minutes] = [0, 0, 0]
  walk.map(direction => {
    switch (direction) {
      case 'e': x++; break
      case 'w': x--; break
      case 'n': y++; break
      case 's': y--; break
    }
    minutes++
  })
  return (!x && !y && minutes === 10)
}


console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])); //false
console.log(isValidWalk(['w'])); //false
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])); //true
