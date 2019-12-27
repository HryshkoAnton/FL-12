let makeNumber = str => str.split('').filter(a => !isNaN(a)).join('');

makeNumber('123098h76gfdd');