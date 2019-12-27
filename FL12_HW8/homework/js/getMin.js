let getMin = (...args) => args.sort((a,b) => a-b)[0];

getMin(3, 0, -3);