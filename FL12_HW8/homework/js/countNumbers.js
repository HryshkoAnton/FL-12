function countNumbers(str) {
    let result = {};
    let strOfNums = str.split('').filter(a => !isNaN(a)).sort((a,b) => a-b).join('');
    for (let i=0; i<strOfNums.length; i++) {
      let currentNum = strOfNums[i];
      if (!Object.keys(result).includes(currentNum)) {
        result[currentNum] = 1;
      } else {
        result[currentNum] +=1;
      }
    }
    return result;
}