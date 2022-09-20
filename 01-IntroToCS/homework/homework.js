'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i] * Math.pow(2, num.length - i - 1);
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
let binario = '';
  while (num > 0) {
    binario = (num % 2) + binario;
    num = Math.floor(num / 2);
  }
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}