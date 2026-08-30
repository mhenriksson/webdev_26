'use strict';

function sortArray(numbers, order) {
  const sorted = numbers.slice();

  if (order === 'asc') {
    sorted.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    sorted.sort(function (a, b) {
      return b - a;
    });
  }

  return sorted;
}

const numbers = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, 'asc')); // 1 ylös
console.log(sortArray(numbers, 'desc')); // 9 alas
