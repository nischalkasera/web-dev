//type conversion and coercion
console.log("Welcome to the conversion program!");
let myVar;
myVar = String(5);
console.log(myVar, typeof myVar);
let booleanVar = true;
//let booleanVar = String(true);
console.log(booleanVar, typeof booleanVar);

let dateToday = String(new Date());
console.log(date, typeof dateToday);

let arrayList = [1, 2, 3, 4, 5];
console.log(arrayList, arrayList.length, typeof arrayList);

let random = 85;
console.log(random.toString());

let string = Number("84584");
string = Number(false);
console.log(string, typeof string);

let num = "31111";
num = parseInt("10.33");
num = Number("10.33");
num = parseFloat("10.33");
console.log(num.toFixed(2), typeof num);

let mstr = "654";
let mstr2 = 34;
console.log(mstr + mstr2);

var abc = "string";
var abc = 969;
console.log(abc);
