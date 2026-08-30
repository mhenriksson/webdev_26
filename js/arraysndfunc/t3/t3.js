'use strict';

const numbers = [];

let input = prompt("Enter a number (or 'done' to finish):");

while (input !== 'done') {
  numbers.push(Number(input));
  input = prompt("Enter a number (or 'done' to finish):");
}

let evenNumbers = '';

for (const number of numbers) {
  if (number % 2 === 0) {
    if (evenNumbers === '') {
      evenNumbers += number;
    } else {
      evenNumbers += ', ' + number;
    }
  }
}

if (evenNumbers === '') {
  evenNumbers = 'None';
}

document.querySelector('#target').innerHTML = `
  <p>Even Numbers: ${evenNumbers}</p>
  <p>End of program.</p>
`;
