// function equawation(a,b,c)
// {
//     return 1+(a+b+c)/2
// }

// console.log(equawation(4,6,7))

// // const hello = ()=>() 

function oneplus(a,b,c)
{
   return 1+(a+b+c*7%4)/2
}

let x=2;
let y=7;
let z=4;

console.log("the equavation is of this :",oneplus(x,y,z))
console.log("the equavation is of this :",oneplus(z,x,y))
console.log("the equavation is of this :",oneplus(y,z,x))