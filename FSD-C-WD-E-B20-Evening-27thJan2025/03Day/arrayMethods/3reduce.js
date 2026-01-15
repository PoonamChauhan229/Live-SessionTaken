// arr.reduce((acc,cv)=>)
// reduce >> entire array elements into a single value  >> Single Value

// [13,45,67,89]  >>

// accumulator  
    // >> 1st element of the array || take that accumulator(initial value) 
    // acc=100
    // cv >>13

// current value
    // >> 2nd element of the array || start 1st element of that array
    // acc==??? >>13
    // cv>>45

let arr= [13,45,67,89] //>> add everthing >> 214

let sum=0; // accumulator >> storing >>> addition 
for(let i=0;i<arr.length;i++){
    // console.log(i,arr[i])
    // sum=sum+arr[i] // acc+cv  >>sum+arr[i]
    sum+=arr[i]
    // console.log("sum:",sum)
}
console.log("sum:",sum)

// just in 1 line
// >>
let res=arr.reduce((acc,cv)=>acc+cv,0)  // with acc value
console.log(res)
// acc=0   cv=13 >>0+13=13
// acc=13  cv=45 >>13+45=58
// acc=58  cv=67 >>58+67=125
// acc=125 cv=89 >>125+89=214 >>214 

let res1=arr.reduce((acc,cv)=>acc+cv)  // without acc value
console.log(res1)
// acc=13   cv=45 >>13+45=58
// acc=58  cv=67 >>58+67=125
// acc=125 cv=89 >>125+89=214 >>214 


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

let res2=studentObj.reduce((acc,cv)=>acc+cv.marks,0)  // without acc value
console.log(res2)
// [object Object]203045
