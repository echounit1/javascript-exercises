const palindromes = function(str) {
  const re = /[^ ,.!?]+/g;
  str = str.toLowerCase().match(re).join('')
  return str.split('').reverse().join('') == str;
}

module.exports = palindromes
