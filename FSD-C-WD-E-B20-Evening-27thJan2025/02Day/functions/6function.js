// arrow functions
// es6 >> advanced feature 
// =>

function compute(a,b){
    console.log(a+b)
}
// compute(2,3)

// aanoymous 
let compute1=function(a,b){
     console.log(a+b)
 }
//  compute1(2,3)

// 3 lines to writes + 1line >> invoking >> 4ines

//2 lines

// single line functions
// function + functionName + {} +return not be there
// let varaiableName=()=>//block of code
// varaiableName()
let test=()=>console.log(2+2)
test()

let multilpy=(a,b)=>console.log(a*b)
multilpy(6,7)
multilpy(16,7)

let subtract=(a,b)=>a-b
console.log(subtract(10,5))
console.log(subtract(100,5))

// multiline functions
// function + functionName >>not needed
// need >> {} || return 


let test1=()=>{
    console.log("Hello")
    console.log("Guvi")
    console.log("Geek")
}
test1()

let test2=()=>{
    return"Hello"
}
console.log(test2())

console.log("-----------------")
let arr5=[12,23,45,90,100]
// 12+23+45 =80

function addition(arr){
    console.log(arr)
    // perfoem addition
    console.log(arr[0]+arr[1]+arr[2])
    // loop >> 12 ....45
    let sum=0; // accumulator >> storing >>> addition 
    for(let i=0;i<arr.length;i++){
       // console.log(i,arr[i])
        // sum=sum+arr[i]
        sum+=arr[i]
        // console.log("sum:",sum)
    }
    console.log("sum:",sum)

}
addition(arr5)

// sum=0
// sum=0 +12  = 12
// sum=12+23 = 35
// sum=35+45 = 80
// sum=80+90 = 170