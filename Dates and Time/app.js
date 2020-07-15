//Date Object is 0 based

// 0 = sunday;         0 = Jan;     6 = Jul;
// 1 = monday;         1 = Feb;     7 = Aug;
// 2 = tuesday;        2 = Mar;     8 = Sep;
// 3 = wednesday;      3 = Apr;     9 = Oct;
// 4 = friday;         4 = May;     10 = Nov;
// 5 = saturday;       5 = Jun;     11 = Dec;

let val;

const today = new Date();
let birthday = new Date("7-10-1999 11:25:00"); //specifying date
birthday = new Date("July 10, 1999");
birthday = new Date("9/10/1999");

//it will give numerical values
val = today.getMonth(); // month today is july = 7 but it ouputs 6, because here dates are 0 based
val = today.getDate();
val = today.getDay(); // today is wednesday, since it's 0 based it outputs 3
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime(); //timestamps, amount of seconds pasts since jan 1st 1970

birthday.setMonth(2);
birthday.setDate(2);
birthday.setFullYear(2001);
birthday.setHours(3);
birthday.setMinutes(58);
birthday.setSeconds(23);

console.log(birthday);
