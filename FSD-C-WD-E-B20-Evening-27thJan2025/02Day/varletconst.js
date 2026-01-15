console.log("Var Keyword") 
var a=100; // assigned a value
console.log(a) //Print >> 100
a=500   //reassign
a=700   //reassign
a=600   //reassign
console.log(a)  //Print >>600
var a=900   //>>redeclaration
console.log(a) //900

// Comment :
// >>Single line Comment >>Ctrl+ /(ShortCut key)
/* 
        Multi
        line
        comment
*/ 
console.log("-----------------")
console.log("Let Keyword")
// Let keyword
let b=200    //>>
console.log(b) //200
b=500
console.log(b) //500
// let b=500 //Cannot redeclare
// Identifier 'b' has already been declared
console.log(b)

console.log("-----------------")
console.log("Const Keyword")
// const keyword >>constant >> No change 
const c=78
console.log(c)
// c=89     //TypeError: Assignment to constant variable.
console.log(c)
// const c=90 //Cannot redeclare >>SyntaxError: Identifier 'c' has already been declared
console.log(c)

// Terminal
// correct folder
// cd foldername 

// node filename 
// output as well 

console.log("-----------------")
// var keyword
console.log(x) //throw an error 
var x=90;
// Hoisting >>var keyword

console.log("-----------------")
// JS >>line by line execution 
//console.log(y) //ReferenceError: Cannot access 'y' before initialization
let y=90;

console.log("-----------------")
//console.log(z) //ReferenceError: Cannot access 'z' before initialization
let z=100;


// scope >>
// global varaibles >> var let const , if declared 
// let const >> scope varaible >>
// {
        // block of code 
// }
// var >> functional scope 

// if else statements
// for loop
// Functions 