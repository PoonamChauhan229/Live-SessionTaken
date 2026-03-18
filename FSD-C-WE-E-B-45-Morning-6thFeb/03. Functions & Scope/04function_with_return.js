// Math + Eng +Sci >> Total  >> Function >> return total 
// Total >> Percentage       >> Function >> total val >> cal %

function total(math,eng,sci){
    let scoredMarks=math+eng+sci
    // console.log(scoredMarks)
    return scoredMarks
}
// console.log(total(90,89,67))
let marks_sum=total(98,81,77)
console.log(marks_sum)

function perecent(x){ //x=marks_sum
    // %  >> (markscored/ totalMarks)*100
    let marksPercentage=(x/300)*100
    console.log(marksPercentage)

}
perecent(marks_sum)