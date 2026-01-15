//let and const >> block scope
let y=100
{
    let x=10;
    console.log(x)
    console.log(y)
}
//console.log(x) //ReferenceError: x is not defined
console.log(y)

console.log("-------------")

const z=400
{
    const a=20;
    console.log(a)
    console.log(z)
}
// console.log(a) //ReferenceError: a is not defined
console.log(z)