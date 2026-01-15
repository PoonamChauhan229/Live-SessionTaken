var a=10;   //>> globaly 
{
    console.log(a)  //10
    var b=20;
    console.log(b)  //20
}
console.log(a)      //10
console.log(b)      //20

// 10 20 10 undefined
// 10 undefined 10 20
// 10,20,10,20


console.log("-------------------") 
// var  >> functional scope

var x=10 //global scope 
function test(){
    var y=20; //functional  scope  >> local variable 
    console.log(x)//10
    console.log(y)//20 
}
test()

console.log(x)//10
//console.log(y) //ReferenceError: y is not defined



