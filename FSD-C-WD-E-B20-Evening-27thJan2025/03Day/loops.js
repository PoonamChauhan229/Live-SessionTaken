// for loop >> covered
// for Each >> array method
// for In   >> objects
// for of   >> arrays

// for in >>object
let obj={
    name:"John",
    age:30,
    city:"NewYork",
    "contact number":788989989
}
console.log(obj)
console.log(obj.age)
console.log("Access",obj["age"])
console.log(obj["contact number"])

// for(let key in object){}
for (let key in obj){
    console.log(key) // name age city
    // want the values
    // . dot operator
    // key >>
    // key >> string >> dynamically 
    // [key]
    // obj[key]
    console.log(typeof(key))
    console.log(obj[key])
}
console.log("----------")
// for of
// for(let element of array){}
let arr=[100,30,67,89]
for(let element of arr){
    console.log(element)
}

let sum=0
for(element of arr){
    sum=sum+element
}
console.log(sum)//286

