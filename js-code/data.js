/* primitive types  //stack
1. string
2. number
3. boolean
4. null
5. undefined
6. symbol
*/
/* reference types  //heap
1. object
2. array
3. function
4. dates
5. regex
*/
//string
let name = "John";
console.log("my name is " + name);
console.log("data type is " + typeof name);
//numbers
let mark = 34;
console.log("data type is " + typeof mark);
//boolean
let isDriver = true;
console.log("data type is " + typeof isDriver);
//null
let nullVar = null;
console.log("data type is " + typeof nullVar);
//undefined
let undefinedVar = undefined;
console.log("data type is " + typeof undefinedVar);

//reference types
myarr = ["string", 34, true, null, undefined];
console.log("data type is " + typeof myarr);

//object literals
let marks = {
  John: 34,
  Jane: 45,
  Jackjones: 56,
};

console.log("data type is " + typeof marks);
console.log(marks);

//function literals
function findName() {}
console.log("data type is " + typeof findName);

//date
let date = new Date();
console.log(typeof date);
