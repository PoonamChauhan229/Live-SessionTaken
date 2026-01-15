// array Method
// arr.filter(()=>)
// parameter >>()=>
    // element,index
// tea >> thrown off
// condition >>filteration process >> true values
// false values >> ignored

// condistion >> satisfied >> true value >> 
// []

let arr=[1,2,3,4,5]
// even 
// divisible by 2 remainder is 0 >> completely divisible
// element%2==0
let result=arr.filter((element,index)=>element%2==0)
console.log(result)
console.log(arr)

// odd
let result1=arr.filter((element,index)=>element%2!==0)
console.log(result1)

let studentObj=[
    {
        name:"Bob",
        marks:25   
    },
    {
        name:"John",
        marks:20    
    },
    {
        name:"Mark",
        marks:30    
    },
    {
        name:"Karl",
        marks:45    
    }
]
let result2=studentObj.filter((element,index)=>element.marks >25)
console.log(result2)
let result3=result2.map((element,index)=>element.marks*10)
console.log(result3)

let result4=studentObj.filter((element,index)=>element.name ==="Bob")
console.log(result4)

let result5=result4.map((element,index)=>element.marks*100)
console.log(result5)