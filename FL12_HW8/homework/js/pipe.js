let pipe = (...args) => args.reduce((a, b) => b(a));

let addOne = x => x + 1;

pipe(1, addOne, addOne);