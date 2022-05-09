// "use strict";
console.log("functions in javascript");

let frndName = "Chris";
let frndName2 = "Joey";

function greet(name, regards = "Best regards.") {
  console.log(
    `Happy Birthday ${name}. I wish you a very happy birthday and best wishes for your future. ${regards}`
  );
  return 0;
}

let val = retGreet(frndName);
console.log(val);

function retGreet(name, regards = "Best regards.") {
  let msg = `Happy Birthday ${name}. I wish you a very happy birthday and best wishes for your future. ${regards}`;
  return msg;
}

const newGreet = function (name, regards = "Best regards.") {
  let msg = `Happy Birthday ${name}. I wish you a very happy birthday and best wishes for your future. ${regards}`;
  return msg;
};
let val1 = newGreet(frndName);
console.log(val);

const myObj = {
  name: "Chris",
  age: "30",
  greet: function () {
    console.log("Hi");
    return "Hello";
  },
};
console.log(myObj.greet());

arr = [1, 2, 3, 4, 5];
arr.forEach(function (item, index, array) {
  console.log(item, index);
});

//scope
/* function scope() {
  let a = "hello";
  console.log(a);
}
scope();
console.log(a); */
// throws error because you cannot access the variable outside of the function

let i = 852;
// console.log(i);
function scope2(name) {
  let i = 9; // this is a local variable and only displays this value within the scope of the function
  //   i = 19; //overrides the value of i and becomes global value = 19
  console.log(i);
  return `This is the value of name: ${name} and i is ${i}`;
}
console.log(scope2("Sam"), i);

if (1) {
  let i1 = 234;
  console.log(i1);
}

let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log("I can drive the car"); //doesn't print because hasDriversLicense is a local variable and follow strict mode
