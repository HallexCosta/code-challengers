import { describe, it } from 'node:test'
import { deepStrictEqual } from 'node:assert'

function lengthOfLongestSubstring(s: string): number {
  let a_pointer = 0
  let b_pointer = 0
  let max = 0
  
  const set = new Set()

  //console.log('string analyse:', s)
  while (b_pointer < s.length) {
    const a_char = s.charAt(a_pointer)
    const b_char = s.charAt(b_pointer)
    //console.log(b_pointer)
    //console.log(s.charAt(b_pointer))
    if (!set.has(b_char)) {
      //console.log('add')
      set.add(b_char)
      b_pointer++
      max = Math.max(set.size, max)
    } else {
      //console.log('delete')
      set.delete(a_char) 
      a_pointer++
    }
    //console.log('a_pointer', a_pointer)
    //console.log('b_pointer', b_pointer)
    //console.log(set)
  }

  return max
}

describe('03 - longest substring', () => {
  it('Must be find sequence without repeating characters', () => {
    const input = 'abcabcbb'
    deepStrictEqual(lengthOfLongestSubstring(input), 3)
  })
  it('Should accept sequence that one letter', () => {
    const input = 'bbbbb'
    deepStrictEqual(lengthOfLongestSubstring(input), 1)
  })
  it('Should find a substring (wke) and not a subsequence (pwke)', () => {
    const input = 'pwwkew'
    deepStrictEqual(lengthOfLongestSubstring(input), 3)
  })
  it('Should consider one letter, symbol or chacaracters like size 1 and to push on catchers array', () => {
    const input = ' '
    deepStrictEqual(lengthOfLongestSubstring(input), 1)
  })
  it('Should consider more letter, symbol or chacaracters like size 1 and to push on catchers array', () => {
    const input = '  '
    deepStrictEqual(lengthOfLongestSubstring(input), 1)
  })
  it('Should consider sequence of characteres that not repeat', () => {
    const input = 'au'
    deepStrictEqual(lengthOfLongestSubstring(input), 2)
  })
  it('Should consider sequence of double characteres that not repeat', () => {
    const input = 'cdd'
    deepStrictEqual(lengthOfLongestSubstring(input), 2)
  })
  it('should be some one', () => {
    const input = 'abba'
    deepStrictEqual(lengthOfLongestSubstring(input), 2)
  })
})
