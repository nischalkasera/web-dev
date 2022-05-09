console.log("Dom selector");

/* 
element selector
single and multiple eliment selector
*/

let element = document.getElementById("myfirst");
console.log(element);
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = "red";
element.innerHTML = "Hello";
element.innerText = "Hello 2";
console.log(element.innerText);

let sel = document.querySelector("#myfirst");
sel = document.querySelector(".child");
sel = document.querySelector("h1");
sel.style.color = "orange";
// console.log(sel);
// console.log(elems[0].getElementsByClassName("child"));

let elems = document.getElementsByClassName("child");
elems = document.getElementsByClassName("container");
elems = document.getElementsByTagName("div");
console.log(elems);

// for (let i = 0; i < elems.length; i++) {
//   const elementss = elems[i];
//   elementss.style.color = "blue";
// }

Array.from(elems).forEach((element) => {
  console.log(element);
  element.style.color = "blue";
});
