// if 
// else
// else if

// if(condition){
    // block of code >> True
// }

// if else
// if(condition){
    // block of code >> True
// }
// else{
    // // block of code >> False
    // }

//if else if else if ..................... else
// if(condition){
    // block of code >> True
// }
// else if(condition2){
    // block of code >> True
// }
// else if(condition3){
    // block of code >> True
// }
// else if(condition4){
    // block of code >> True
// }
// else{
    // // block of code >> False
    // }




// loops
console.log("----------------")
console.log(1==2)  // LS==RS
if("2"===2){
    console.log("Code executed successfully")
}
console.log("----------------")
// comparision
console.log("2"==2) // true >> checks the value
// string ==number
// ===  >> check the value+datatype
console.log("2"===2)

console.log("----------------")
// > < ||>= <=
// age >> vote 18
// 
let age=18
if(age >=18){
    console.log("You Re allowed to Vote as ur age is",age)
}else{
     console.log("Not allowed to Vote as ur age is",age)
}

console.log("----------------")
// termination >> finds || not finds >> default code
let color="red"
if(color=="red"){
    console.log("Color Matched-1st Condition",color)
}
else if(color=="RED"){
    console.log("Color Matched-2nd Condition",color)
}
else if(color=="Red"){
        console.log("Color Matched-3rd Condition",color)
}
else{
    console.log("Default block, none of them matched , False")
}

// red Red RED >> write a condition accept all
// Logical Operators >> OR Operator >>|| >> n no of conditions , but 1 conditions >> true || false
console.log("--------------------")
let texture ="reD"
if(texture=="RED"|| texture=="Red"||texture=="red"||texture=="reD"){
    console.log("Texture Matched",texture)
}else{
    console.log("Once again , didnt matched")
}
// AND Opertors >>35 || >30 , <40  >>n no of conditiona , all conditions are matched
// && >> more than 1 condition , true at all time
let num=35.5
if(num>=30 && num<=40 && num==35){
    console.log("Number is in between range-> 3-40",num)
}else{
    console.log("Not in Range -> 3-40",num)
}
