let a = +prompt('Enter the first value:');
let b = +prompt('Enter the second value:');
let c = +prompt('Enter the third value:');


if (isNaN(a) || isNaN(b) || isNaN(c) || !Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    alert('input values should be ONLY numbers ');
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert('A triangle must have 3 sides with a positive definite length')
} else if(!(a + b > c && a + c > b && c + b > a)) {
    alert('Triangle doesn’t exist');
    console.log('Triangle doesn’t exist');
  } else if (a === b && a === c && b === c) {
    console.log('Equilateral triangle');
  } else if (a === b || a === c || b === c) {
    console.log('Isosceles triangle');
  } else {
      console.log('Scalene triangle')
  }