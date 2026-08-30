'use strict';

const coordinate1 = prompt('Enter the first coordinate (x1, y1):');
const coordinate2 = prompt('Enter the second coordinate (x2, y2):');

// coordinate1 = 3,6
const coordArray1 = coordinate1.split(',');
const coordArray2 = coordinate2.split(',');
// coordArray1 = [3, 6]

const distance = Math.sqrt(
  (+coordArray2[0] - +coordArray1[0]) ** 2 +
    (+coordArray2[1] - +coordArray1[1]) ** 2
);

document.querySelector('#target').innerText = distance;
