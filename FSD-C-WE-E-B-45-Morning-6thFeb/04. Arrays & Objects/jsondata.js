let obj1={
    stuname:"akhil",
    stuage:25,
    stuschool:"cosmos"
}

console.log(obj1)

let json1={
    "stuname":"akhil",
    "stuage":25,
    "stuschool":"cosmos"
}

console.log(json1)

// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
let x=JSON.stringify(obj1)
console.log(x)
// '{"stuname":"akhil","stuage":25,"stuschool":"cosmos"}'
obj1.stuage
console.log(x.stuage) // undefined>> string

// Converts a JavaScript Object Notation (JSON) string into an object.
let y=JSON.parse(x)
console.log(y)
console.log(y.stuage)

// ser >> string  >>user >>convert it object
// convert it string ser << string  >>okay


