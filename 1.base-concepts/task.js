"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d === 0) {
    arr.push(-b / (2 * a));
  }
  else if (d > 0) {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent /= (100 * 12);
  let s = amount - contribution;
  let pay = s * (percent + (percent / (((1 + percent) ** countMonths) - 1)));
  return Math.round(pay * countMonths * 100) / 100;
}