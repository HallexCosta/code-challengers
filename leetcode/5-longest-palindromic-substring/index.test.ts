import { afterEach, describe, it } from "node:test";
import assert from "node:assert/strict";
import { longestPalindrome } from ".";

// https://leetcode.com/problems/longest-palindromic-substring/description/
describe("Given a string s, return the longest palindromic substring in s.", () => {
  describe("must be find first occurence of palindromic sequence", () => {
    it('ensure find palindromic is founded in start of string', () => {
      const string = 'acadb'
      const palindromic = longestPalindrome(string)
      assert.strictEqual(palindromic, 'aca')
    })
    it('must be found palindromic in the middle of string', () => {
      const string = 'tyubbdb'
      const palindromic = longestPalindrome(string)
      assert.strictEqual(palindromic, 'bb')
    })
    it('must be found palindromic in the end of string', () => {
      const string = 'uiopqtcc'
      const palindromic = longestPalindrome(string)
      assert.strictEqual(palindromic, 'cc')
    })
  });
  it('must be ensure sequences that has at least two caracters', () => {
      const string = 'aa'
      const palindromic = longestPalindrome(string)
      assert.strictEqual(palindromic, 'aa')
  });
  it('must be find palindromic substring if string has length of one', () => {
      const string = 'c'
      const palindromic = longestPalindrome(string)
      assert.strictEqual(palindromic, 'c')
  });
  it('must be throw an error if not found palindromic substrng', () => {
      const string = 'qwert'
      assert.throws(() => {
        longestPalindrome(string),
        new Error('Not found palindromic substring')
      })
  })
});
