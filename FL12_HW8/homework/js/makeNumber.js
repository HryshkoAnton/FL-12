function makeNumber(str) {
    return str.split('').filter(a => !isNaN(a)).join('');
}