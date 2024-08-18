let runagain = true;
while (runagain) {
  let age = prompt("enter the your age.");
  age = Number.parseInt(age);

  if (age >= 18) {
    alert("You are able to Drive");
  } else if (age < 18) {
    alert("you not applicable for drive ");
  } else if (typeof age!=="number"|| age<0||isNaN(age)){
    console.error("Invalid input: Age should be a positive number.");
  }
  else{
    console.warn("you will quit the program");
  }
  runagain = confirm("Are you want to run again program");

  if (runagain) {
  } else {
    document.write("you quit");
    console.warn("you will quit the program");
  }
}
