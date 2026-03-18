const array = [1, 2, 3];

array.shift();
array.pop();
array.push(78)
array.unshift(67)
console.log(array);
let res=array.map((element,index)=>element+1)
console.log(res)

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

const array1 = ["one", "two", "three"];
console.log("array:", array1);

const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]