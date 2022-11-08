function validBraces(braces){
  const braceCounter = {round: 0, square: 0, curly: 0}

  for (const i in braces) {
    const curr = braces[i]
    const prev = braces[i-1]
    if (curr === ")" && (prev === "[" || prev === "{")) return false
    if (curr === "]" && (prev === "(" || prev === "{")) return false
    if (curr === "}" && (prev === "[" || prev === "(")) return false

    if (curr === "(") braceCounter.round++
    if (curr === ")") braceCounter.round--
    if (curr === "[") braceCounter.square++
    if (curr === "]") braceCounter.square--
    if (curr === "{") braceCounter.curly++
    if (curr === "}") braceCounter.curly--
    if (Object.values(braceCounter).includes(-1)) return false
  }
  return (Object.values(braceCounter).every(e => e === 0))
}

console.log(validBraces("(){}[]"), "should be true")
console.log(validBraces("())({}}{()][]["), "should be false")
console.log(validBraces("({})[({})]"), "should be true")
console.log(validBraces("[(])"), "should be false")
console.log(validBraces("[()]"), "should be true")
console.log(validBraces("[[(((])))]"), "should be false")