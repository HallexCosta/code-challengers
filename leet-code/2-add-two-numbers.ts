// https://leetcode.com/problems/add-two-numbers/
import { describe, it } from 'node:test'
import { deepStrictEqual } from 'node:assert'

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let numL1: string | number | bigint = ''
  let numL2: string | number | bigint = ''
  let loop = true
  let currentL1: ListNode | null = l1
  let currentL2: ListNode | null = l2
  while (loop) { 
    if (currentL1) {
      if (currentL1.next === null) loop = false;

      numL1 += currentL1.val
      currentL1 = currentL1.next
    } else {
      loop = false
    }
  }
  loop = true
  while (loop) { 
    if (currentL2) {
      numL2 += currentL2.val
      if (currentL2.next === null) loop = false;
      currentL2 = currentL2.next
    } else {
      loop = false
    }
  }
  numL1 = BigInt(numL1.split('').reverse().join(''))
  numL2 = BigInt(numL2.split('').reverse().join(''))
  
  const sum = numL1 + numL2
  
  loop = true
  const sumArray = sum.toString().split('')
  let l3: null | ListNode = null
  let currentL3: null | ListNode= l3;
  
  for (const v of sumArray.reverse()) {
    if (l3 === null) {
      l3 = new ListNode(
        Number(v)
      )
      currentL3 = l3
    } else {
      if (currentL3) {
        currentL3.next = new ListNode(
          Number(v)
        )
        currentL3 = currentL3.next
      }
    }
  }
  return l3
}

describe('02 - add two numbers', () => {
  it('01-test-case', () => {
    const input1 = new ListNode(
      2,
      new ListNode(
        4,
        new ListNode(
          3
        )
      )
    )
    const input2 = new ListNode(
      5,
      new ListNode(
        6,
        new ListNode(
          4
        )
      )
    )
    const expected = new ListNode(
      7,
      new ListNode(
        0,
        new ListNode(8)
      )
    )

    deepStrictEqual(addTwoNumbers(input1, input2), expected)
  })
  it('02-test-case', () => {
    const input1 = new ListNode(
      0
    )
    const input2 = new ListNode(
      0
    )
    deepStrictEqual(addTwoNumbers(input1, input2), new ListNode(
      0
    ))
  })
  it('03-test-case', () => {
    const input1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              9,
              new ListNode(
                9,
                new ListNode(
                  9
                )
              )
            )
          )
        ),
      )
    )
    const input2 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9
          )
        ),
      )
    )
    const expected = new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(
              0,
              new ListNode(
                0,
                new ListNode(
                  0,
                  new ListNode(
                    1
                  )
                )
              )
            )
          )
        ),
      )
    )

    deepStrictEqual(addTwoNumbers(input1, input2), expected)
  })

  it('04-test-case ()', () => {
    const createListNode = (input: number[]) => {
      let l3: ListNode | null | undefined = null
      let currentL3: ListNode | null = null

      for (const v of input) {
        if (l3 === null) {
          l3 = new ListNode(
            Number(v)
          )
          currentL3 = l3
        } else {
          if (currentL3 !== null) {
            currentL3.next = new ListNode(
              Number(v)
            )
            currentL3 = currentL3?.next
          }
        }
      }
      return l3
    }

    // using function to add values in ListNode because the number have size of 31
    let input1 = createListNode([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])
    let input2 = createListNode([5,6,4])
    let expected = createListNode([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1])

    deepStrictEqual(addTwoNumbers(input1, input2), expected)
  })
})
