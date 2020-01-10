let convert = (...args) => [...args].map(x => typeof x === 'string' ? parseInt(x) : x.toString());
// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function convert(...args) {
//     let result = [];
//     for (let i in [...args]) {
//       let elem = [...args][i];
//       if (typeof elem === 'string') {
//         result.push(parseInt(elem));
//       } else {
//         result.push(elem.toString());
//       }
//     }
//   return result;
// }


let executeforEach = (arr, func) => arr.forEach(x => func(x));
// executeforEach([1,2,3], (el) => console.log(el * 2)) // logs 2 4 6

// function executeforEach(arr, func) {
//     for (let i in arr) {
//       func(arr[i]);
//     }
// }


let mapArray = (arr, func) => arr.map(x => func(parseInt(x)));
// mapArray([2, '5', 8], (el) => el + 3) // returns [5, 8, 11]

// function mapArray(arr, func) {
//     let result = [];
//     for (let i in arr) {
//       result.push(func(parseInt(arr[i])));
//     }
//     return result;
// }


let filterArray = (arr, func) => arr.filter(func);
// filterArray([2, 5, 8], (el) => el % 2 === 0) // returns [2, 8]

// function filterArray(arr, func) {
//     let result = [];
//     for (let i in arr) {
//       if (func(arr[i])) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
// }

let flipOver = str => str.split('').reverse().join('');
// flipOver('hey world') // 'dlrow yeh'

// function flipOver(str) {
//     result = '';
//     for (let i=1; i<str.length+1; i++) {
//       result += str[str.length-i]
//     }
//     return result;
// }

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

// function getArrayOfKeys(arr, key) {
//     let result = [];
//     for (let i in arr) {
//       let obj = arr[i];
//       result.push(obj[key]);
//     }
//     return result;
// }


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

// function substitute(arr) {
//     let result = [];
//     for (let i in arr) {
//       if (arr[i] < thirty) {
//         result.push('*');
//       } else {
//           result.push(arr[i]);
//       }
//     }
//     return result;
// }