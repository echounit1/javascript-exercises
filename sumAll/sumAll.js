const sumAll = function (x, y) {
  if (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number') return 'ERROR';

  let sum = 0;
  for (let i = Math.min(...arguments); i <= Math.max(...arguments); i++) {
    sum += i;
  }
  return sum
}

module.exports = sumAll
