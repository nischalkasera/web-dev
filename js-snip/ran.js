// difference between let and var

/*function a() {
  var abc = 4;
  for (var i = abc; i < 10; i++) {
    console.log(i);
  }
  console.log(i);
} */

function a() {
  let abc = 4;
  for (let i = abc; i < 10; i++) {
    console.log(i);
  }
  //console.log(i); throws error because cannot access the variable outside the scope
}

a();
