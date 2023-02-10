// https://leetcode.com/problems/median-of-two-sorted-arrays/description/
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  const merged = nums1.concat(nums2).sort((a: number, b: number) => {
    if (a > b) return 1
    if (a < b) return -1
    return 0
  })

  // check if have a one median
  if (merged.length % 2 == 1) return merged[Math.floor(merged.length / 2)]

  return (merged[merged.length / 2] + merged[merged.length / 2 - 1]) / 2
}
