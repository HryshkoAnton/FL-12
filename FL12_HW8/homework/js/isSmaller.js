let isBigger = (a, b) => a > b;

let isSmaller = (a, b) => !isBigger(a, b);

isSmaller(5, -1);