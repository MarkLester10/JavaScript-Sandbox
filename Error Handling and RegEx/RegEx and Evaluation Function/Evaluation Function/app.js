//please download quokka, it helps you see the console.log output within the file

//FUNCTIONS

let re;

//ReGex literal starts with / and ends with /

re = /hello/;
re = /hello/g; // g flag for global search that looks the entire paragraph
re = /hello/i; // i flag for case insensitive

console.log(re);

//removes the slashes
console.log(re.source);

//exec() - Return result in an array if there's match or null

let result;

result = re.exec("hello world");
console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

//test() - Returns true or false
result = re.test("Hello");
console.log(result);

let str;

//match() - return result in array or null same as the exec but diff implementation
str = "Hello there";
result = str.match(re);
console.log(result);

//search() - Returns the index of the first match and if not found returns -1
str = "There hello";
result = str.search(re);
console.log(result);

//replace() - finds the word that matches the pattern and replacing it with a new word and then return the whole message
str = "Hello fucking Covid";
result = str.replace(re, "Goodbye");
console.log(result);
