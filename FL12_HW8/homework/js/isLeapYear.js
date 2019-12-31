function isLeapYear(str) {
    let date = new Date(str);
    if (isNaN(date)) {
      return 'Invalid Date';
    }
    let year = date.getFullYear();
    let leapYear = new Date(year, 1, 29).getDate() === 29;
    return leapYear ? `${year} is a leap year` : `${year} is not a leap year`;
  }

isLeapYear('2020-01-01 00:00:00');