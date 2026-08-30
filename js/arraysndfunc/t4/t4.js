'use strict';

function sortArray(numbers) {
  const sorted = numbers.slice();
  sorted.sort(function (a, b) {
    return a - b;
  });
  return sorted;
}

const numbers = [5, 2, 8, 1, 9];

console.log('Original array:', numbers);
console.log('Sorted array:', sortArray(numbers));
