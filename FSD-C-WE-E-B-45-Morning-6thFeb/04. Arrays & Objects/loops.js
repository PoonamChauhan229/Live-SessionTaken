let arr=[1,2,3,4]
//directs prints inside
let x=arr.forEach((element)=>2)
console.log(x) //undefined

arr.forEach((element)=>console.log(element*2))

let students = [
  { name: "Akhil", age: 25 },
  { name: "Pooja", age: 22 }
];

students.forEach((element)=>console.log(element.name,element.age))


//for in loop
// objects / json 

let obj1={
    stuname:"akhil", // key :value
    stuage:25,
    stuschool:"cosmos"
}






// for(let key in obj){
// }

for(let key in obj1){
    console.log(key,obj1[key])
}

for(let element of arr){
    console.log(element)
}

console.log("-----")
let name = "Akhil";
console.log(name.length)
for(let i=0;i<name.length;i++){
    console.log(i,name[i])
}

for(let element of name){
    console.log(element)
}
