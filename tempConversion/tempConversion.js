const ftoc = function(temp) {
  temp = (temp - 32) * (5/9);
  return Number.isInteger(temp) ? +temp : +temp.toFixed(1);
}

const ctof = function(temp) {
  temp = (temp * (9/5)) + 32;
  return Number.isInteger(temp) ? +temp : +temp.toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}

console.log(ftoc(32)); // 0
console.log(ftoc(100)); // 37.8
console.log(ftoc(-100)); // -73.3
console.log(ctof(0)); // 32
console.log(ctof(73.2)); // 163.8
console.log(ctof(-10)); // 14
