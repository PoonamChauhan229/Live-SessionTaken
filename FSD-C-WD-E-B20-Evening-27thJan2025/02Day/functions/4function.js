// Annoymous Function  >>window Events >>global Events
// function name is not there
//let variableName= function(){
    // block of code
// }
// variableName()

// function >> parameter
// function >> return
 // function >> console.log("")

 let compute=function(a,b){
    console.log(a,b)
    console.log(a+b)
 }
 compute(2,3)

//  iife >>immedialtely invoked function expression  >>()();
// function name is not there
// Syntax:
// (
    // annoymous function
    //function(){
        // block of code
    // } 
// )();
// () >>Grouping Operator
// () >>invokation

(
    function(){
        console.log("Sample Test")
    }
)();

// with parameter 
(
    function(institue){
        console.log("Sample Test",institue)
    }
)("Guvi Geek");

