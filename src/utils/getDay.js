// import {day} from '../constant/calcDay';

const day = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

export const getDay = (year, month) => {
  const d = day;
  const y = Number(year);
  const m = Number(month);
  const isLeapYear =
    (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? true : false;
  //   console.log("isLeapYear", isLeapYear, typeof isLeapYear);

  return isLeapYear === true ? {day: d[m] + 1} : {day: d[m]};
};
