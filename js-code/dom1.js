console.log("This is Dom manipulation using javascript window object");
let a = document;
a = document.all; // all the elements in the document which is not an array
// a = document.all[2]; // the third element in the document
// a = document.body; // the body element
// a = document.forms[0]; // the form elementall the forms in the document, it is an html collecton
Array.from(a).forEach(function (element) {
  //   console.log(element);
});
a = document.links[0].href; // all the links in the document
//document images and document scripts
// console.log(a);
let ab = document.scripts;
for (let item of ab) {
  console.log(item);
}
// you can iterate all scripts in console as an Array

a = document.images;
Array.from(a).forEach(function (element) {
  console.log(element);
});
console.log(typeof img);

b = document.scripts;
Array.from(b).forEach(function (element) {
  console.log(element);
});
console.log(typeof script);

let str = "javascript";
let links = document.links;
for (i in Array.from(links)) {
  if (document.links[i].href.includes(str)) {
    console.log(document.links[i].href);
  }
}

let ac = document.links;
for (i = 0; i < ac.length; i++) {
  let string = ac[i].toString();
  if (string.includes("javascript")) {
    console.log(ac[i]);
  }
}

let ranString = "google";
a = document.links;
Array.from(a).forEach(function (item) {
  if (item.href.includes(ranString)) console.log(item);
});
