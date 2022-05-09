console.log("conditional statements");
const age = 8;
if (age == 25) {
  console.log("you are 25");
} else if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("Your age is " + age);
}
// == checks for equality
// >= checks for greater than or equal to
// <= checks for less than or equal to
// != checks for inequality
// && checks for both conditions to be true
// || checks for either condition to be true
// ! checks for the opposite of the condition
// === checks for equality and type
// !== checks for inequality and type

const numb = 55;
// if (numb == 55) {
//   console.log("numb is 55 and integer ");
// } else
// if (numb == "55") {
//   console.log("numb is '55' with string ");
// } else
// if (numb === "55") {
//   console.log("numb is '55' and strictly string");
// } else if (numb !== "55") {
//   console.log("numb is not '55' and not strictly a string");
// }

let newRan = 25;
if (typeof newRan !== "string") {
  console.log("newRan is not a string");
} else {
  console.log("newRan is a string");
}

let doesDrive = false;
let driveAge = 4;
if (doesDrive == true || driveAge >= 18) {
  console.log("you can drive and are eligible for license");
} else {
  console.log("you cannot drive");
}

// short ternanary operator
const voteAge = 18;
console.log(voteAge >= 18 ? "you can vote" : "you cannot vote");

// switch statement
switch (age) {
  case 25:
    console.log("you are 25");
    break;
  case 18:
    console.log("you are 18");
    break;
  default:
    console.log("you are neither 18 nor 25");
    break;
}
