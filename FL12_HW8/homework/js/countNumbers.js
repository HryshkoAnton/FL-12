function countNumbers(str) {
    let result = {};
    let strOfNums = str.split('').filter(a => !isNaN(a)).sort((a,b) => a-b);
    strOfNums.forEach(num => {
      Object.keys(result).includes(num) ? result[num] +=1 : result[num] = 1;
    });
    return result;
}