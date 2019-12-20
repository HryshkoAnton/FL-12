let a = +prompt('Enter the first value:');
let b = +prompt('Enter the second value:');
let c = +prompt('Enter the third value:');

let x;
let x1;
let x2;
let four = 4;
let two = 2;
let discriminant = b*b - four*a*c;
let sqrDiscr = Math.sqrt(discriminant);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else if (a === 0 || b === 0 || c === 0) {
    console.log('Invalid input data');
} else if (discriminant < 0) {
    console.log('no solution');
} else if (discriminant === 0) {
    x = - b / (two * a);
    console.log(`x = ${x}`);
} else if (discriminant > 0) {
    x1 = Math.round((- b + sqrDiscr) / (two * a));
    x2 = Math.round((- b - sqrDiscr) / (two * a));
    console.log(`x1 = ${x1} and x2 = ${x2}`);
}
