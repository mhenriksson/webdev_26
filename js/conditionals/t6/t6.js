'use strict';

const userInput = prompt('Enter a positive integer:');
const num = Number(userInput);

let html = '';

for (let i = 1; i <= num; i++) {
  html += '<tr>';
  for (let j = 1; j <= num; j++) {
    const product = i * j;
    html += `<td>${product}</td>`;
  }
  html += '</tr>';
}

document.querySelector('#target').innerHTML = html;
