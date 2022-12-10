// https://leetcode.com/problems/two-sum/
import {describe, it} from 'node:test'
import { deepStrictEqual } from 'node:assert'

function twoSum(nums: number[], target: number): number[] {
    for (const numIndex in nums) {
      for (const numIndex2 in nums) {
        const numNextIndex = Number(numIndex2) + 1
        if (Number(numIndex) === numNextIndex) continue
        const sum = nums[numIndex] + (nums[numNextIndex] || 0)
        if (sum === target)  {
          return [Number(numIndex), Number(numNextIndex)]
        }
      }
    }
    return [0]
}

//test case
describe('Two sum', () => {
  it('01-test-case', () => {
    const inputs = [2,7,11,15]
    const target = 9

    deepStrictEqual(twoSum(inputs, target), [0, 1])
  })
  it('02-test-case', () => {
    const inputs = [3, 2, 4]
    const target = 6

    deepStrictEqual(twoSum(inputs, target), [1, 2])
  })
  it('03-test-case', () => {
    const inputs = [3, 3]
    const target = 6

    deepStrictEqual(twoSum(inputs, target), [0, 1])
  })
  it('Should be sum array in any order', () => {
    const inputs = [3, 2, 3]
    const target = 6

    deepStrictEqual(twoSum(inputs, target), [0, 2])
  })
  it('04-test-case', () => {
    const inputs = [2,5,5,11]
    const target = 10

    const result = twoSum(inputs, target)
    deepStrictEqual(result, [1,2])
  })
})
