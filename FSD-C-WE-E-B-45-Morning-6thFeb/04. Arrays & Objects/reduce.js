// reduce >>  simgle value
// works with a number
// [1,2,3,4] >>10
// sum =3 >> sum=sum+i >> console.log(sum) >> 10+3 >>13

// arr.reduce((cv,acc)=>code) >>
// cv >> curreent element
// acc >> accumulator 

let arr =[1,2,3,4]

//without acc value acc=0 by defaulat
let total=arr.reduce((cv,acc)=>cv+acc)
console.log(total)
// acc=0,cv=1 >>0+1 >>1
// acc=1,cv=2 >>1+2 >>3
// acc=3,cv=3 >>3+3 >>6
// acc=6,cv=4 >>6+4 >>10

// with acc acc=3
let total1=arr.reduce((cv,acc)=>cv+acc,3)
console.log(total1)
// acc=3,cv=1 >>3+1 >>4
// acc=4,cv=2 >>4+2 >>6
// acc=6,cv=3 >>6+3 >>9
// acc=9,cv=4 >>9+4 >>13




