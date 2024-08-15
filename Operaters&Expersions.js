console.log("operaters in JS");

// // let a = 12;
// let b = 13;

// //addition
// console.log("a+b=", a + b);
// //substraction
// console.log("a-b=", a - b);
// //multi
// console.log("a*b=", a * b);
// //division
// console.log("a/b=", a / b);
// //power
// console.log("a**b", a ** b);
// //modules
// console.log("a%b", a % b);
// //increment
// console.log("++a", ++a);//First increment
// console.log("a++", a++);//After increment 

let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
  alert("This is an invalid age");
}
else if(a<9){
  alert("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
  alert("You are a kid and you can think of driving after 18");
}
else{
  alert("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))
