

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw Error(`a: ${a}, b: ${b} phai la so`)
  }

  return a + b;
}

console.log(add(1, 20))
// console.log(add(1, '22'))

function findMax(a, b) {
  return a > b ? a : b;
  // if(a > b) return a;
  // return b;
}

console.log(findMax(45, 89))

function findMaxList(a, b, c) {
  // if(kiem tra dieu kien a, b, c)
  let mMax = findMax(a, b)
  if(mMax > c){
    return mMax;
  }
  return mMax = c;
}

console.log('findMaxList', findMaxList(1, 34, 20))
console.log('findMaxList', findMaxList(90, 34, 20))
console.log('findMaxList', findMaxList(1, 34, 89))
