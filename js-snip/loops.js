console.log("loops in javascript");

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log("--------------");

// let variab = 5;
// while (variab > 0) {
//   console.log(variab + 1);
//   variab--;
// }
// console.log("--------------");

let key = 0;
do {
  if (key === 3) {
    key += 1;
    continue;
  }
  console.log(key);
  key += 1;
} while (key < 10);
console.log("--------------");
let testArr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < testArr.length; i++) {
  console.log(testArr[i]);
}

/* console.log("--------------");
testArr.forEach(function (item, index, array) {
  console.log(item, index, array);
}); */

console.log("--------------");
let obj = {
  name: "John",
  age: 30,
  location: "USA",
  phone: 123456,
  gender: "male",
};

for (let key in obj) {
  console.log(`The ${key} in object is ${obj[key]}`);
}
