'use strict';

const celsiusInput = prompt('Enter a temp in celsius:');
const celsius = Number(celsiusInput);

const fahrenheit = (celsius * 9) / 5 + 32;
const kelvin = celsius + 273.15;

document.querySelector('#target').innerHTML = `
  <p>${celsius}°C is ${fahrenheit}°F</p>
  <p>${celsius}°C is ${kelvin}K</p>
`;
