let convert = (...args) => [...args].map(x => typeof x === 'string' ? parseInt(x) : x.toString());
// convert('1', 2, 3, '4') // [1, '2', '3', 4]


let executeforEach = (arr, func) => arr.forEach(x => func(x));
// executeforEach([1,2,3], (el) => console.log(el * 2)) // logs 2 4 6


let mapArray = (arr, func) => arr.map(x => func(parseInt(x)));
// mapArray([2, '5', 8], (el) => el + 3) // returns [5, 8, 11]


let filterArray = (arr, func) => arr.filter(func);
// filterArray([2, 5, 8], (el) => el % 2 === 0) // returns [2, 8]


let flipOver = str => str.split('').reverse().join('');
// flipOver('hey world') // 'dlrow yeh'


function makeListFromRange(arr) {
    let result = [];
    for (let i=arr[0]; i<=arr[1]; i++) {
        result.push(i);
    }
    return result;
}
// makeListFromRange([2, 7]) // [2, 3, 4, 5, 6, 7]


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
  
let getArrayOfKeys = (arr, key) => arr.map(x => x[key]);
// getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']

const thirty = 30;
let substitute = arr => arr.map(x => {
    if (x < thirty) {
      x = '*';
      return x;
    } else {
      return x;
    }
  });
// substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']