//  string interpolation
let name ="dev"
let platform ="gITHUb"
console.log(`hello my name is ${name} here i will starting coding on ${platform.toLowerCase(platform)}`);
console.log("---------------------------------------------------------------")
console.log(`My name is ${name}.I am pushing the code on a ${platform.toLowerCase(platform)}.`);
console.log("---------------------------------------------------------------")
console.log(`${name} patel from ahmedabad to ${platform.toLowerCase(platform)}`);
console.log("---------------------------------------------------------------")
//  string methods
const gameName = new String ("dvs");
console.log(gameName.length)
console.log(gameName.__proto__)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("d"));
console.log(gameName.includes("d"));
 const newstring =("         devansh            ")
 console.log(newstring.trim());
// console.log(newstring);
const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));