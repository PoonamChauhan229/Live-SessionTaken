// loop
// tyre , is there end
// no end
// no end >> developement >>continously run >>start stop 
// continously running >> overloaded >> crash

// loop >> start , end 
// i will start home >> end as soon i reach office/collge/meet my friend(condition)

// loop >> run conistion meeting >> terminate >>coniditional is failing
// conidtion is true >> execute
// consition is false >> terminate

// execution once
// execution continoulsy

// start , end , condition

// for(start;condition;increment/decrement){ // execute only once ,consitonlsuy
    // block of code
// }

// a=1 .........................a=10 a++
// 1 <=10
// 2<=10
// 3<=10
// 
// 
// 10<=10


// Write 1-10 >>print 1-10 , 11 >> Fail treminate
//start -1 end -10 (), ++
//i variable
for(let i=1;i<=10;i++){
    // console.log(i)
}
//i=1 ,  1<=10 >>T, >>1  ||2
//i=2 ,  2<=10 >>T, >>2  ||3
//i=3 ,  3<=10 >>T, >>3  ||4
//i=4 ,  4<=10 >>T, >>4  ||5
//i=5 ,  5<=10 >>T, >>5  ||6
//i=7 ,  7<=10 >>T, >>7  ||8
//i=8 ,  8<=10 >>T, >>8  ||9
//i=9 ,  9<=10 >>T, >>9  ||10
//i=10 , 10<=10>>T, >>10  ||11
//i=11 , 11<=10 >>F >> Loop Terminate

for(let i=2;i<=5;i++){
    // console.log(i)
}

// using the loop , give the table of 5
let num=5
console.log("Table of",num)
console.log("------------------")
for(let i=1;i<=12;i++){
    console.log(num,"*",i,"=",num*i)
}

// 1- 10 >>sum >>55
console.log("------------------")
let sum=0
for(let i=1;i<=10;i++){
    // sum=sum+i
    sum+=i
    // console.log(i,"--",sum=sum+i)
}
console.log("Sum is ",sum)
// sum=0, i=1 1<=10>>T, 0+1 >>sum=1
// sum=1, i=2 2<=10>>T, 1+2 >>sum=3
// sum=3 ,i=3 3<=10>>T, 3+3 >>sum=6
// sum=6 ,i=4, 6+4 >>sum=10
// ....
// sum=55,i=11,condition >> sum =55

// 1-10 
let mul=1
for(let i=1;i<=10;i++){
    // mul=mul*i
    mul*=i

}
console.log("Mul is ",mul)

for (let i=1;i<=5;i++){
    if(i==3){
        continue;
    }
    if(i==4){
        break;
    }
    console.log(i)
}


// while
// while(condition){
    // block of code
    // increment
// }
//start
//condition
//increment
let i=0;
while(i<=10){
    console.log(i)
    i++;
}


// do while
// 1 time condition run
// start >>print
// increment
// condition
let j=1
do{
    console.log("hello",j)
    j++
}
while(j<=10) // termination

