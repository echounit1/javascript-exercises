const fibonacci = function (n) {
  if (Number(n) < 0) return 'OOPS';
  const fib = [1, 1];

  if (n > 2) {
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
  }

  return fib[n - 1];
}

module.exports = fibonacci;
