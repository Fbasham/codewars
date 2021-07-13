function anagrams(word, words) {
  return words.filter(e=>[...e].sort().join``===[...word].sort().join``)
}