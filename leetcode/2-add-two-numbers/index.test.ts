// https://leetcode.com/problems/add-two-numbers/
import { describe, it } from 'node:test'
import { deepStrictEqual } from 'node:assert'
import { addTwoNumbers, ListNode } from './2-add-two-numbers'

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

