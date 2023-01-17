// https://leetcode.com/problems/two-sum/
import {describe, it} from 'node:test'
import { deepStrictEqual } from 'node:assert'
import { twoSum } from '.'

describe('Two sum', () => {
  it('00-test-case', () => {
    const inputs = [0]
    const target = 0

    deepStrictEqual(twoSum(inputs, target), [0])
  })
  it('00-test-case', () => {
    const inputs = [0]
    const target = 0

    deepStrictEqual(twoSum(inputs, target), [0])
  })
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

