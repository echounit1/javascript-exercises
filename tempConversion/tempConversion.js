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
