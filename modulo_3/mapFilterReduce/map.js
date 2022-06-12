function mapComThis(arr, thisArg) {
  return arr.map(function (item) {
    return item * this.value;
  }, thisArg);
}

const maca = {
  value: 2,
};

const laranja = {
  value: 3,
};

const nums = [1, 2];

console.log(mapComThis(nums, maca));
console.log(mapComThis(nums, laranja));

function mapSemThis(arr) {
  return arr.map((item) => item * 5);
}

console.log(mapSemThis(nums));
