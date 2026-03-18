// heart of JS
// repeat again and again 
// 5 hrs >> open the door >>close the door

//2+2
//2+2
//2+2
//2+2
//2+2
//2+2
// {}

//function functionName(){
    // block of code
// }

//functionName() >> call /invoking 

function sum(){
   console.log(2+2)
} 
sum()
sum()
sum()
sum()

// 3,4 || 56,89 ,|| 45,900 || add
// function with parameters  >> use a different values

// function functionName(param1,param2......param3){
    // console.log(para1,param2)
// }
// functionName(val1,val2......)

total(89,90) //functions are also hoisted

function total(x,y){
    var a=78; // functional scope 
    let b=89;
    const c=800
    console.log(x,y)
    console.log(x+y)
    console.log(a,b,c)
}
//total(3,4)  //x=3 ,y=4
//total(56,89) //x=56, y=89
console.log("--------")
// console.log(a,b,c) //a is not defined

console.log("----function with return keyword----")
// return >> return a value || terminate of code || last line
//  give a val >> console.log(functionName())


function hello(){
    console.log("Greetings")
    console.log("Greetings")
    return 100
    console.log("Greetings")
}
let greet=hello()
console.log(greet)

console.log(hello())

console.log(greet+450)

console.log("----function with anonymous function----")

//let variableName=function(){
    // block of code
// }
// calling / invoking
// variableName()

let x=function(a,b,c,d,e,f,g){
    console.log("Addition",2+2)
    console.log(a,b,c,d,e,f)
    console.log("-----end")
    return g
    console.log("-----end")
}
x()
x(45,78,90,100,78,90,200)
console.log(x(45,78,90,100,78,90,200))








