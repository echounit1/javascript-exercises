function add (x, y) {
	return x + y;
}

function subtract (x, y) {
	return x - y;
}

function sum (arr) {
	return arr.reduce((a, b) => a + b, 0);
}

function multiply (arr) {
	return arr.reduce((a,b) => a * b, 1)
}

function power(x, y) {
	return x ** y;
}

function factorial(x) {
	if (x < 0) return 'Error';
	if (x === 0) return 1;

	const arr = Array.from( {length: x}, (v, k) => ++k )
	return arr.reduce((a,b) => a * b, 1)
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
