let a = prompt('Enter the first value:');
let b = prompt('Enter the second value:');
let c = prompt('Enter the third value:');

let x, x1, x2, discr, sqrDiscr;
let two = 2;
let four = 4;

if (isNaN(a) || isNaN(b) || isNaN(c) || !a || !b || !c || +a === 0) {
    console.log('Invalid input data');
} else {
    discr = b*b - four*a*c;
    sqrDiscr = Math.sqrt(discr);
    if (discr < 0) {
        console.log('no solution');
    } else if (discr === 0) {
        x = - b / (two * a);
        console.log(`x = ${Math.round(x)}`);
    } else if (discr > 0) {
        x1 = (- b + sqrDiscr) / (two * a);
        x2 = (- b - sqrDiscr) / (two * a);
        console.log(`x1 = ${Math.round(x1)} and x2 = ${Math.round(x2)}`);
    }
}