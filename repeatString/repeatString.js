const repeatString = function(str, n) {
  if (n >= 0) {
    s = ''
    for (let i = 1; i <= n; i++) s+= str
    return s
  } else {
    return 'ERROR'
  }
}

module.exports = repeatString
