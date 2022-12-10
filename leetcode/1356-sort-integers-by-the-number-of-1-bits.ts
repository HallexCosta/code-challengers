const utils = {
  showBits: (array: number[]) => {
    for (const a of array) {
      console.log(a, decimalToBinary(a))
    }
  }
}

const decimalToBinary = function(decimal: number) {
  return decimal.toString(2)
}
const countBinary = function(binary: string) {
  return binary.split('')
    .filter(number => Number(number) === 1)
    .length
}
const sortByAscending = (a: number, b: number) => a - b
const sortByBinary = (a: number, b: number) => {
  if (countBinary(decimalToBinary(a)) > countBinary(decimalToBinary(b)))
    return 1
  if (countBinary(decimalToBinary(b)) > countBinary(decimalToBinary(a))) 
    return -1
  if (countBinary(decimalToBinary(b)) == countBinary(decimalToBinary(a))) 
    return 0
  return 0
}

//const array = [0,1,2,3,4,5,6,7,8]
const array = [1024,512,256,128,64,32,16,8,4,2,1]
//utils.showBits(array)

console.log(array.sort(sortByAscending).sort(sortByBinary))
