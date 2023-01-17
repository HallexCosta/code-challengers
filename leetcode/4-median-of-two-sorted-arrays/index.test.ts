// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
import { deepStrictEqual } from 'node:assert/strict'
import { describe, it } from 'node:test'
import { findMedianSortedArrays } from './4-median-of-two-sorted-arrays'

describe('#findMedianSortedArrays', () => {
  describe('should sorted two arrays and return median', () => {
    it('arrays with merged size "pair"', () => {
      const entries = {
        nums1: [1, 2],
        nums2: [3]
      }

      const result = findMedianSortedArrays(entries.nums1, entries.nums2)
      const expected = 2
      deepStrictEqual(result, expected)
    })
    it('arrays with merged size "odd"', () => {
      const entries = {
        nums1: [1, 2],
        nums2: [3, 4]
      }

      const result = findMedianSortedArrays(entries.nums1, entries.nums2)
      const expected = 2.5
      deepStrictEqual(result, expected)

    })
    it('arrays in any order', () => {
      const entries = {
        nums1: [3],
        nums2: [1, 2]
      }

      const result = findMedianSortedArrays(entries.nums1, entries.nums2)
      const expected = 2
      deepStrictEqual(result, expected)
    })
    it('arrays with sames values', () => {
      const entries = {
        nums1: [2],
        nums2: [1, 2]
      }

      const result = findMedianSortedArrays(entries.nums1, entries.nums2)
      const expected = 2
      deepStrictEqual(result, expected)
    })
  })
})
