let marks = 
{
    a:10,
    b:20,
    c:40,
    d:60
}

// for (let i=0 ;i<Object.keys(marks).length;i++){
//     console.log("marks of the " +Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]])
// }

for (let key in marks){
    console.log(`the marks of ${key} are ${marks[key]}`)
    // console.log(typeof key)
}