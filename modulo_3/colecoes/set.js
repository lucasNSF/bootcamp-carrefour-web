// Estruturas que guardam apenas valores únicos

const myArray = [1, 1, 1, 2, 2, 3, 4, 4, 4, 5, 5, 6, 7, 7, 8, 8, 9];
const mySet = new Set(myArray);

console.log(mySet);
console.log(mySet.size);
