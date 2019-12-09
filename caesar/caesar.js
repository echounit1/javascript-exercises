const caesar = function (str, n) {
  fixShift(n);
  return str
    .split('')
    .map(el => shift(el, n))
    .join('');
}

const fixShift = (shift) => {
  return shift > 26 || shift < -26 ? shift % 26 : shift;
};

const base = (n) => n < 97 ? 65 : 97;

const mod = (n, m) => (n % m + m) % m;

const shift = function (char, shift) {
  const code = char.charCodeAt(0);
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - base(code), 26) + base(code)
    )
  }
  return char;
  // return checkRange(char.charCodeAt(0) + shift) ?
  //   String.fromCharCode(char.charCodeAt(0) + shift) :
  //   String.fromCharCode(char.charCodeAt(0) + shift + 26)
}

module.exports = caesar;
