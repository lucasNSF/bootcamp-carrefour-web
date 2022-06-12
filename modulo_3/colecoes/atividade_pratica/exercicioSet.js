/** ATIVIDADE 02
 * Dado o array [30, 30, 30, 40, 5, 223, 2049, 3034, 5] retorne
 * outro array apenas com valores únicos.
 */

const myArray = [30, 30, 30, 40, 5, 223, 2049, 3034, 5];

const getSingleValues = (arr) => {
  const mySet = new Set(arr);
  return [...mySet];
}

console.log(getSingleValues(myArray));
