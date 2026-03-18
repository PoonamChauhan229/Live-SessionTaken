// map
let arr=[1,2,3,4]
// 10 , 20 >>> each element
// iteration
// work on each element
// array.filter()
// function take >> 2 parameter >> element , index
// let newarray=array.filter((element,index)=>condition)
// console.log(newarray)
// returns a new array 
// return only the true value || false ignored
// [1,2,3,4]  >> even numbers >>[2, 4] >> odd [1,3]
// element %2==0 even  >>[2,4]
// element %2!=0 odd   >>[1,3]
// condition matched >> true >> o/p[] , if not then []

let newarr1=arr.filter((element,index)=>element%2==0)
console.log(newarr1)
console.log(arr)

let newarr2=arr.filter((element,index)=>element%2!==0)
console.log(newarr2)
console.log(arr)

let newarr3=arr.filter((element,index)=>element==30)
console.log(newarr3)
console.log(arr)