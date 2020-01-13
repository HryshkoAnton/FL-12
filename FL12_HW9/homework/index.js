const a = 2;
const b = 3;
const c = 8;
const d = 7;
const e = 48;
const f = 31;
const year = 2019;
const g = 365;

let convert = (...args) => mapArray(args, (x) => typeof x === 'string' ? parseInt(x) : x.toString());
convert('1', a, b, '4'); // [1, '2', '3', 4]


function executeforEach(arr, func) {
    for (let i of arr) {
      func(i);
    }
}
executeforEach([1,a,b], (el) => console.log(el * a)); // logs 2 4 6


function mapArray(arr, func) {
  let result = [];
  executeforEach(arr, (elem) => result.push(func(elem)));
  return result;
}
mapArray([a, '5', c], (el) => parseInt(el) + b); // returns [5, 8, 11]


function filterArray(arr, func) {
    let result = [];
    executeforEach(arr, element => {
      if (func(element)) {
        result.push(element);
      }
    });
    return result;
}
filterArray([a, d, c], (el) => el % a === 0); // returns [2, 8]


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
makeListFromRange([a, d]); // [2, 3, 4, 5, 6, 7]


const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

let getArrayOfKeys = (arr, key) => mapArray(arr, (obj) => obj[key]);
getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']


const minValue = 30;
let substitute = arr => mapArray(arr, (elem) => elem < minValue ? '*' : elem);
substitute([c, e, a, f, d]); // ['*', 48, '*', 31, '*']


function getPastDay(date, days) {
    const subtractedDate = new Date(date.getTime());
    subtractedDate.setDate(subtractedDate.getDate() - days);
    return subtractedDate.getDate();
}
  
const date = new Date(year, 0, a);
console.log(getPastDay(date, 1)); // 1, (1 Jan 2019)
console.log(getPastDay(date, a)); // 31, (31 Dec 2018)
console.log(getPastDay(date, g)); // 2, (2 Jan 2018)

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const twoDigits = 10;
  return (
    `${year}/${month + 1}/${days} ` +
    `${hours < twoDigits ? '0' : ''}${hours}:` +
    `${minutes < twoDigits ? '0' : ''}${minutes}`
  );
}
console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));