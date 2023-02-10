import { Palindromic } from './Palindromic'

// https://leetcode.com/problems/longest-palindromic-substring/description/
export function longestPalindrome(s: string): string {
  const palindromic = new Palindromic(s)

  while (true) {
    const stringSize = palindromic.getString().length

    if (
      palindromic.getPointerA() === stringSize &&
      palindromic.getPointerB() === stringSize + 1
    ) {
      break
    }

    const isPalindromic = palindromic.isPalindromic()

    if (isPalindromic) {
      return palindromic.getSubstring()
    }

    if (palindromic.getPointerB() === stringSize) {
      palindromic.clearSubstring()
      palindromic.nextPointerA()
      palindromic.resetPointerB(palindromic.getPointerA())
      palindromic.addInSubstring(
        palindromic.getString()[palindromic.getPointerA()]
      )
      palindromic.addInSubstring(
        palindromic.getString()[palindromic.getPointerB()]
      )
      continue
    }

    palindromic.addInSubstring(
      palindromic.getString()[palindromic.getPointerB()]
    )
    palindromic.nextPointerB()
  }
  throw new Error('Not found palindromic substring')
}
