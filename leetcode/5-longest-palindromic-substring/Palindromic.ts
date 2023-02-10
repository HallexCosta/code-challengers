export class Palindromic {
  private pointer_a = 0
  private pointer_b = 1
  private substring = ''

  public constructor(private string: string) {
    this.substring = string[this.pointer_a]
  }

  public reverseString(string: string) {
    return string.split('').reverse().join('')
  }

  public hasAtLeastSequenceOf(substring: string, number: number) {
    if (substring.length < number) return false

    return true
  }
  public isPalindromic() {
    if (this.getString().length === 1) return this.getSubstring()

    const substring = this.getSubstring()

    if (!this.hasAtLeastSequenceOf(substring, 2)) return false

    const palindromic = this.reverseString(substring)
    if (substring === palindromic) return true

    return false
  }

  public nextPointerA() {
    this.pointer_a++
  }
  public nextPointerB() {
    this.pointer_b++
  }
  public resetPointerB(basePointer?: number) {
    this.pointer_b = (basePointer || 0) + 1
  }
  public clearSubstring() {
    this.substring = ''
  }
  public addInSubstring(char: string) {
    this.substring += char
  }
  public getSubstring() {
    return this.substring
  }
  public getPointerA() {
    return this.pointer_a
  }
  public getPointerB() {
    return this.pointer_b
  }
  public getString() {
    return this.string
  }
}
