export const calcBirthDate = (str) => {
  const date = calcNewBirthDate(str);
  const register = calcNewRegister(str);
  return { date, register };
};

const calcNewYear = (year) => {
  year = 2000 + parseInt(year);
  let yearStr = year - 2000;
  if (year > 2003) {
    year = 2003;
    yearStr = "03";
  }
  yearStr = yearStr.toString().padStart(2, "0");
  return { year, yearStr };
};

const calcMonth = (month) => {
  const monthStr = month;
  if (month > 20) month -= 20;
  if (month < 10) month = `0${month}`;
  return { month, monthStr };
};

const calcNewBirthDate = (birthdate) => {
  const { year } = calcNewYear(birthdate.slice(2, 4));
  const { month } = calcMonth(birthdate.slice(4, 6));
  const date = birthdate.slice(6, 8);
  birthdate = `${year}-${month}-${date}`;
  return birthdate;
};

const calcNewRegister = (birthdate) => {
  const letters = birthdate.slice(0, 2).toUpperCase();
  const { yearStr } = calcNewYear(birthdate.slice(2, 4));
  const { monthStr } = calcMonth(birthdate.slice(4, 6));
  const date = birthdate.slice(6, 8);
  const numbers = birthdate.slice(-2);
  const register = `${letters}${yearStr}${monthStr}${date}${numbers}`;
  return register;
};
