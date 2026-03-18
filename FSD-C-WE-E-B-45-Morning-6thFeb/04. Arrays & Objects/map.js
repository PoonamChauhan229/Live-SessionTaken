// map
arr=[10,20,30,40]
// 10 , 20 >>> each element
// iteration
// transform
// work on each element
// array.map()
// function take >> 2 parameter >> element , index
// let newarray=array.map((element,index)=>code)
// console.log(newarray)
// returns a new array 
// arr=[1,2,3,4] >> [2,3,4,5] (added each elemnt by 1) >>[4,6,8,10] (multilpied by 2)

// [11,21,31,41]

arr.map((element,index)=>console.log(element,index))

let newarr1=arr.map((element,index)=>[element,index])
console.log(newarr1)

let newarr2=arr.map((element,index)=>element+1)
console.log(newarr2)


let newarr3=arr.map((element,index)=>element+index)
console.log(newarr3)

let newarr4=newarr3.map((element,index)=>element*2)
console.log(newarr4)
console.log(arr)