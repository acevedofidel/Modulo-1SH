'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 2) return array;
  let pivot = array[0];
  let left = [];
  let right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
function merge(left, right) {
let result = [];
let i = 0;
let j = 0;
while (i < left.length && j < right.length) {
  if (left[i] < right[j]) {
    result.push(left[i]);
    i++;
  } else {
    result.push(right[j]);
    j++;
  }
}
return result.concat(left.slice(i)).concat(right.slice(j));
}
function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
if (array.length === 1) return array;

let mid = Math.floor(array.length / 2);
let left = array.slice(0, mid);
let right = array.slice(mid);
return merge(mergeSort(left), mergeSort(right));
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
