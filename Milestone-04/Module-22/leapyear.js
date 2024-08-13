function leapYear(year) {
  if ((year % 100 !== 0 && year % 4 === 0) || (year%400===0)){
    return true;
  }
  return false;
}

const year1 = 2024;
const year2 = 1900;

console.log(leapYear(year1));
console.log(leapYear(year2));
