console.log("variable expression");
//keywords for variable
//var, let, const
//var is function scoped
//let is block scoped
//const is block scoped and immutable
var name = "ricky";
var neword = "test";
var channel;
var intNew = 56;
var abc = `this "is 'so'me"thing random`;
console.log(name);
console.log(`my name is ${name}`);
console.log(abc);
console.log(neword, channel, intNew);
var city = "Delhi";
/* Variable rules 
1. Variable names can only contain letters, numbers, and underscores.
2. Variable names are case sensitive.
3. Variable names must begin with a letter,numbers, $.
4. Variable names cannot be reserved keywords.
5. Variable names cannot be JavaScript keywords.
6. Variable names cannot be the same as a function name.
7. Variable names cannot be the same as a variable name in the same scope.*/
var $car = "red";
console.log($car);
const fruitName = "apple";
// const cannot be reassigned and is always initialized
console.log(fruitName);

{
  let city = "Bangalore"; //local variable
  //if local variable is undefined, it will look for global variable
  //and if not found, it will throw an error
  city = "London";
  console.log(city); //prints London
}

console.log(city); //prints Delhi

const array = ["4", "5", "6"];
array.push("7");
console.log(array);

/*common Case types in variable declarations
1. smallVar
2. small_var
3. small-var
4. SmallVar
*/

document.getElementById; //document.gebi and tab
