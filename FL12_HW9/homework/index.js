// let convert = (...args) => [...args].map(x => typeof x === 'string' ? parseInt(x) : x.toString());
function convert(...args) {
    let result = [];
    for (let arg of args) {
      if (typeof arg === 'string') {
        result.push(parseInt(arg));
      } else {
        result.push(arg.toString());
      }
    }
  return result;
}
convert('1', 2, 3, '4'); // [1, '2', '3', 4]


// let executeforEach = (arr, func) => arr.forEach(x => func(x));
function executeforEach(arr, func) {
    for (let i of arr) {
      func(i);
    }
}
executeforEach([1,2,3], (el) => console.log(el * 2)); // logs 2 4 6


// let mapArray = (arr, func) => arr.map(x => func(parseInt(x)));
function mapArray(arr, func) {
    let result = [];
    for (let i of arr) {
      result.push(func(parseInt(i)));
    }
    return result;
}
mapArray([2, '5', 8], (el) => el + 3); // returns [5, 8, 11]


// let filterArray = (arr, func) => arr.filter(func);
function filterArray(arr, func) {
    let result = [];
    executeforEach(arr, element => {
      if (func(element)) {
        result.push(element);
      }
    });
    return result;
}
filterArray([2, 5, 8], (el) => el % 2 === 0); // returns [2, 8]


// let flipOver = str => str.split('').reverse().join('');
function flipOver(str) {
    let result = '';
    for (let i=1; i<str.length+1; i++) {
      result += str[str.length-i]
    }
    return result;
}
flipOver('hey world'); // 'dlrow yeh'


function makeListFromRange(arr) {
    let result = [];
    for (let i=arr[0]; i<=arr[1]; i++) {
        result.push(i);
    }
    return result;
}
makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];
  
// let getArrayOfKeys = (arr, key) => arr.map(x => x[key]);
function getArrayOfKeys(arr, key) {
    let result = [];
    executeforEach(arr, obj => result.push(obj[key]));
    return result;
}
getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']


const minValue = 30;
let substitute = arr => {
  return mapArray(arr, elem => {
    return elem < minValue ? '*' : elem;
  })
}
substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']


function getPastDay(date, days) {
    const subtractedDate = new Date(date.getTime());
    subtractedDate.setDate(subtractedDate.getDate() - days);
    return subtractedDate.getDate();
}
  
const date = new Date(2019, 0, 2);
console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
console.log(getPastDay(date, 2)); // 31, (31 Dec 2018)
console.log(getPastDay(date, 365)); // 2, (2 Jan 2018)