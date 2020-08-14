let re;

//Literal Characters or our Regex
re = /hello/i; //case insensitive

//METACHARACTER SYMBOLS
re = /^h/i; //must start with
re = /World$/i; //must ends with , you can do a letter or a word
re = /^mark$/i; //must begins with and ends with
re = /^M.rk$/i; //Matches any and only ONE character and cannot be empty
re = /M*rk/i; //Matches any and one or more character and can be empty
re = /gra?e?y/i; //optional charcter and can be empty
re = /gra?e?y\?/i; //Escape character

//BRACKETS [] - Character Sets (must be and has to be) cannot be empty

re = /gr[ae]y/i; //must be and has to be an a or e only
re = /[GF]ray/; //must be and has to be an G or F only
re = /[^FG]ray/i; //matches anything except G or F
re = /[A-Z]ray/; //matches any UPPERCASE letter
re = /[a-z]ray/; //matches any LOWERCASE letter
re = /[A-Za-z]ray/; //matches any letter of any case
re = /[0-9][0-9]ray/; //matches any digit

//BRACES {} - QUANTIFIERS
re = /Hel{2}o/i; //must occur exactly  {m} amount of times
re = /Hel{2,4}o/i; //must occur  exactly {m,n} amount of times
re = /Hel{2,}o/i; //must occur at least {m,} amount of times

//PARENTHESES () - GROUPING
re = /([0-9]x){3}/i; //expected output 4x4x8x looks for 3 or more
re = /^([0-9]x){3}$/i; //expected output 4x4x8x looks for exactly 3

//SHORTHAND CHARACTER CLASSES
re = /\w/; //word character or alphanumeric character or _  and cannot be empty
re = /\w+/; // plus (+) looks all the the characters
re = /\W/; // NON-WORD Character anything except letter, number and _ and cannot be empty
re = /\d/; //Match any digit and cannot be empty
re = /\d+/; //Match any digit and cannot be empty
re = /\D/; //Match any non-digit and cannot be empty
re = /\s/; //Match only  white space and cannot be empty
re = /\S/; //Match only NON-white space and cannot be empty
re = /Hell\b/i; //Match only the word boundary (matches the exact/actual word)

//ASSERTIONS - Conditionals
re = /x(?=y)/; //match only if, x is followed by y
re = /x(?!y)/; //match only if, x is not followed by y
//string to match
const str = "x";

//Our custom function to test our expression
console.log(re.exec(str));

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches the ${re.source}`);
  } else {
    console.log(`${str} does NOT match the ${re.source}`);
  }
}

reTest(re, str);
