// https://leetcode.com/problems/add-two-numbers/

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let numL1: string | number | bigint = ''
  let numL2: string | number | bigint = ''
  let loop = true
  let currentL1: ListNode | null = l1
  let currentL2: ListNode | null = l2
  while (loop) {
    if (currentL1) {
      if (currentL1.next === null) loop = false

      numL1 += currentL1.val
      currentL1 = currentL1.next
    }
  }
  loop = true
  while (loop) {
    if (currentL2) {
      numL2 += currentL2.val
      if (currentL2.next === null) loop = false
      currentL2 = currentL2.next
    }
  }
  numL1 = BigInt(numL1.split('').reverse().join(''))
  numL2 = BigInt(numL2.split('').reverse().join(''))

  const sum = numL1 + numL2

  loop = true
  const sumArray = sum.toString().split('')
  let l3: null | ListNode = null
  let currentL3: null | ListNode = l3

  for (const v of sumArray.reverse()) {
    if (l3 === null) {
      l3 = new ListNode(Number(v))
      currentL3 = l3
    } else {
      if (currentL3) {
        currentL3.next = new ListNode(Number(v))
        currentL3 = currentL3.next
      }
    }
  }
  return l3
}
