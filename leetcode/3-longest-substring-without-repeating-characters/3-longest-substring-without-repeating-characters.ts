export function lengthOfLongestSubstring(s: string): number {
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
