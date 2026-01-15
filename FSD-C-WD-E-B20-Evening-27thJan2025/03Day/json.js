let obj={
    name:"guvi",
    age:10
}
console.log(obj)

let jsonObj={
    "name":"guvi",
    "age":10
}
console.log(jsonObj)

//JSON.parse() //Converts a JavaScript Object Notation (JSON) string into an object.
//JSON.stringify() //Converts a JavaScript value ,object to a JavaScript Object Notation (JSON) string.

// request >>>server >>JSON.stringify()
// respons <<<server >>JSON.parse() 
console.log("-------------------") 
let jsonString=JSON.stringify(obj)
console.log(jsonString) //{"name":"guvi","age":10} 
console.log(jsonString.name)

console.log("-------------------") 
let jsonMethodParse=JSON.parse(jsonString)
console.log(jsonMethodParse)
console.log(jsonMethodParse.name)