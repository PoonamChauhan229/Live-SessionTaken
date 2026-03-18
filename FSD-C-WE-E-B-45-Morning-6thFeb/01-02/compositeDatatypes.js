let arr=[10,20,30,40,78,"hello"] //collection of numbers
console.log(arr)
// 90
console.log(arr[5])
console.log(arr[0])
arr[4]=780
console.log(arr)

// length
// length property
console.log(arr.length)

arr[10]=200
console.log(arr)
// [ 10, 20, 30, 40, 780, 90, <4 empty items>, 200 ]
// 6 items >> insert at a index 10 >>6789 <4 empty items>
// insert 
// update

// Object
//{}
// key :value >> pair
let student={
    name:"Akhil",
    age:24,
    roll:350,
    address:"Salem",
    greeting:"hello",
    "first name":"guvi geek",
    last_name:"Tech"
}
console.log(student)
console.log(student.greeting)
console.log(student.age)
student.age=79
console.log(student)
student.course="Javascript"
console.log(student)
console.log(student["first name"])
console.log(student.last_name)


// ["akhil",24,350,"Salem"] >>>
