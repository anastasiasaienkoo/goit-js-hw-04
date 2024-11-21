function filterArray(numbers, value) {
  const massiv = [];
  for(const i of numbers) {
    if(i > value) {
       massiv.push(i);
    }
  }
  return massiv;
}

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([1, 2, 3, 4, 5], 4));
console.log(filterArray([1, 2, 3, 4, 5], 5));
console.log(filterArray([12, 24, 8, 41, 76], 38));
console.log(filterArray([12, 24, 8, 41, 76], 20));