const removeFromArray = function(... args) {
  let arr = arguments[0];

  [...arguments].slice(1, arguments.length).forEach(e => {
    while (arr.indexOf(e) > -1) {
      arr.splice(arr.indexOf(e), 1)
    }
  });
  return arr;
}

module.exports = removeFromArray
