// iife >>()()
// immediately invoked function
// (
//function(){
// block of code
// }
// )()
// annonymous
(function(name1, name2) {
  console.log(name1,name2,"is am learning JS",);
})("Poonam","Akhil");

(function(name1, name2) {
  console.log(name1,name2,"is am learning JS",);
})("Poonam","Akhil");

(function(name1, name2) {
  console.log(name1,name2,"is am learning JS",);
})("Poonam","Akhil");

let result=(function(name1, name2,lang) {
  return [name1,name2,lang]
})("Poonam","Akhil","JS");

console.log(result)
console.log(result)
console.log(result)
// return 

let result2=(function(name1, name2,lang) {
  return {"stud1":name1,"stud2":name2,"language":lang}
})("Poonam","Akhil","JS");

console.log(result2)
// return 


let result3=(function(name1, name2,lang) {
  return name1,name2,lang
})("Poonam","Akhil","JS");

console.log(result)