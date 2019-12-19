let a = +prompt('Enter the first value:');
let b = +prompt('Enter the second value:');
let c = +prompt('Enter the third value:');

let discriminant = b**2 - 4*a*c;
let sqrDiscr = Math.sqrt(discriminant);
let x1;
let x2;

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Invalid input data');
} else if (a == 0 && b == 0 && c == 0) {
    console.log('Invalid input data');
} else if (discriminant < 0) {
    console.log('no solution');
} else if (discriminant == 0) {
    console.log((- b - sqrDiscr) / (2 * a));
} else if (discriminant > 0) {
    x1 = ((- b + sqrDiscr) / (2 * a));
    x2 = ((- b - sqrDiscr) / (2 * a));
    console.log(x1);
    console.log(x2);
}
