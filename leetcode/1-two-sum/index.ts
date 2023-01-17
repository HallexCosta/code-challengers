// https://leetcode.com/problems/two-sum/

// this new algorithm was constructed based in 3-longest-substring-without-repeating-characters
export function twoSum(nums: number[], target: number): number[] {
  const nums_size = Number(nums.length)
  let pointer = 0
  let last_pointer = nums_size - 1
  while (pointer <= last_pointer) {
    if (last_pointer === pointer) {
      pointer++
      last_pointer = nums_size - 1
    }

    const sum = nums[pointer] + nums[last_pointer]
    if (sum === target) {
      return [pointer, last_pointer]
    }

    last_pointer--
  }
  return [0]
}

// this is old version two sum
//export function twoSumOld(nums: number[], target: number): number[] {
//    for (const numIndex in nums) {
//      for (const numIndex2 in nums) {
//        const numNextIndex = Number(numIndex2) + 1
//        if (Number(numIndex) === numNextIndex) continue
//        const sum = nums[numIndex] + (nums[numNextIndex] || 0)
//        if (sum === target)  {
//          return [Number(numIndex), Number(numNextIndex)]
//        }
//      }
//    }
//    return [0]
//}

//test case
