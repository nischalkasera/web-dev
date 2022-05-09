console.log("arrays tutorial");
let marks = [80, 90, 70, 60, 75, 85];
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const mixed = ["str", 1, true, { a: 1, b: 2 }, [1, 2, 3]];

const arr = new Array(23, 45, 67, "hello");
console.log(marks);
// console.log(arr);
// console.log(fruits);
// console.log(fruits[0]);
// console.log(mixed);
console.log(Array.isArray(mixed)); //returns true if the variable is an array

arr[0] = "random";
let arrelement = arr[0];
console.log("element: ", arrelement);
console.log(arr);

let value = marks.indexOf(80);
console.log("value: ", value);

//mutate/modify the array
marks.push(100); //adds to the end of the array
marks.unshift(0); //adds to the beginning of the array
marks.pop(); //removes the last element of the array
marks.shift(); //removes the first element of the array
marks.splice(1, 2); //removes the element at index 1 and removes 2 elements
marks.reverse(); //reverses the order of the array
marks.sort(); //sorts the array
console.log(marks);

let marks2 = [1, 2, 3];
marks = marks.concat(marks2); //concatenates the arrays at the end of the array
console.log(marks);

//defining objects
let person = {
  name: "John",
  "last name": "Doe",
  age: 30,
};

console.log(person.name);
console.log(person["last name"]);
console.log(person["age"]);
