console.log("Introduction to Strings");
const names = "John";
const greeting = "good morning";
console.log(greeting + " " + names);

let html;
// html = "<h1>This is a heading</h1>
// <p>This is a paragraph</p>"; //string concatenation
html = "<h1>This is a heading</h1>" + "<p>This is a paragraph</p>";
html = html.concat(" this", " is", " concatenated");

console.log(html);
// console.log(html.length);
// console.log(html.toUpperCase());
// console.log(html.toLowerCase());
// console.log(html);
// console.log(html[0]);

console.log(html.indexOf("h1")); //returns the index of the first occurence of the string that is 1
console.log(html.lastIndexOf("h1")); //returns the index of the last occurence of the string that is 23
console.log(html.charAt(0)); //returns the character at the specified index
console.log(html.charAt(html.length - 1)); //returns the character at the specified index
console.log(html.substring(0, 4)); //returns the substring starting at the specified index and ending at the specified index
console.log(html.endsWith("p")); //returns true if the string ends with the specified string
console.log(html.includes("p")); //returns true if the string includes the specified string
console.log(html.replace("p", "a")); //replaces the first occurence of the specified string with the specified string
console.log(html.slice(0, 4)); //returns the substring starting at the specified index and ending at the specified index
console.log(html.split(" ")); //returns an array of strings split at the specified string
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3); //returns the array starting at the specified index and ending at the specified index
console.log(citrus);
const myBest = fruits.slice(-3, -1);
console.log(myBest);
/* 
let nk = "available";
let nk2 = "unavailable";
let myHtml2 = `
<p>I am currently ${nk} <!--This is interpolation--> </p>
<p>I am currently ${nk2}</p>
`;
document.body.innerHTML = myHtml2; */
//shift+alt+a for multiple line comments

// string interpolation - template literals
let fruit1 = "Banana";
let fruit2 = "Orange"; //'Orange\'' can be used to display the string Orange' otherwise it throws an error if an extra ' is used
let myHtml = ` Hello ${names} 
  <h1>This is a heading</h1>
  <p>You like ${fruit1} and ${fruit2}</p>
  <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates"  target="_blank"
  rel="noopener noreferrer">Learn more about tagged templates</a>
    `;
document.body.innerHTML = myHtml;
document.body.innerHTML = myHtml;

let a = 5;
let b = 10;
console.log("Fifteen is " + (a + b) + " and not " + (2 * a + b) + ".");
