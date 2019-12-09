let findTheOldest = function (arr) {
  const ages = arr.map((x) => {
    return x.yearOfDeath ?
      x.yearOfDeath - x.yearOfBirth :
      getCurrentYear() - x.yearOfBirth
  });
  return arr[ages.indexOf(Math.max(...ages))];
}

const getCurrentYear = function () {
  const today = new Date();
  return today.getFullYear();
}

module.exports = findTheOldest;

const people = [
  {
    name: 'Carly',
    yearOfBirth: 1066,
  },
  {
    name: 'Ray',
    yearOfBirth: 1962,
    yearOfDeath: 2011
  },
  {
    name: 'Jane',
    yearOfBirth: 1912,
    yearOfDeath: 1941
  },
];

console.log(findTheOldest(people)); // { name: 'Carly', yearOfBirth: 1066 }
