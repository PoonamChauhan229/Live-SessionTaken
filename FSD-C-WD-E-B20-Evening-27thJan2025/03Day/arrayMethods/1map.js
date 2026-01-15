// array
// methods
// ()

// MRF

// MAP
// REDUCE
// FILTER

// MAP METHOD
let arr=[1,2,3,4,5]
// >>square of it
// [1,4,9,16,25]

// for loop>>
for(let i=0;i<arr.length;i++){
    console.log(arr[i]*arr[i])
}
// lot of steps >>

// arr.map()
// transform an arry 
// return u a array
// function as a paramter >>(element,index)

arr.map((element,index)=>console.log(element,index))

let newArray=arr.map((element,index)=>element*element)
console.log(newArray)

// [2,4,6,8,10]
let newArray1=arr.map((element,index)=>element*2)
console.log(newArray1)
console.log(arr)

// [ 1, 3, 5, 7, 9 ] 
let newArray2=arr.map((element,index)=>element+index)
console.log(newArray2)

// array of objects
let studentObj=[
                    {
                        name:"Bob",
                        marks:10    //+20
                    },
                    {
                        name:"John",
                        marks:20    //+20
                    }
                ]
studentObj.map((element)=>console.log(element))
let result=studentObj.map((element)=>element.marks+20)
console.log(result) //[30,40]