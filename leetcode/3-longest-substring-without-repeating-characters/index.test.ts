import { describe, it } from 'node:test'
import { deepStrictEqual } from 'node:assert'
import {lengthOfLongestSubstring } from './3-longest-substring-without-repeating-characters'

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

