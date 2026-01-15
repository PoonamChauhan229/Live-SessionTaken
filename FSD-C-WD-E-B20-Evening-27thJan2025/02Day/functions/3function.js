// function functionName(){
    // block of code
// }

// invoke || call 
// functionName()

// function functionName(param1,param2,param3,....paramN){
    // block of code
    // code >>using >>param1,param2,param3,....paramN
// }

// function functionName(){
    // block of code
    // return ;
// }

// invoke || call 
// functionName()

function printNum(){
    console.log(2)
}
printNum()

function printNum1(){
    return 2;
}
console.log(printNum1())
let a=printNum1()
console.log(a+20)

// 2 functions
// totalof marks >>E+S+M 300  
// percentage  >>(totalscoedmarks/totalmarks)*100

function totalMarks(e,s,m){
    console.log("Total Scored Marks",e+s+m)
    let sum=e+s+m
    return sum;
    // return e+s+m;
    console.log("Total Scored Marks 2",e+s+m)
}
console.log(totalMarks(80,90,95))
let tsm=totalMarks(80,90,95)
console.log(tsm)

function percentage(x,tm){
    console.log((x/tm)*100)
}
percentage(tsm,300)

function test(){
    return [12,34,56]
}
console.log(test())
