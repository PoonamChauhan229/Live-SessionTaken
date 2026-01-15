var textarea=document.getElementById('textarea')

// Words count and characters count
var counter=document.getElementById('counter')
var toRead=document.getElementById('toRead')
var preview=document.getElementById('preview')
textarea.addEventListener('input',(e)=>{
  // console.log(e.target.value)
   // console.log(e.target.value.length)
    let wordscharCount=e.target.value
    counter.innerHTML=`
    <b>${wordscharCount.split(" ").length}</b> words and
    <b>${wordscharCount.replace(/ /g,"").length}</b> characters
    `
    //in 1 min 125 words can be read  
    toRead.innerHTML=`
    <b>${((1/125)*wordscharCount.split(" ").length).toFixed(2)}</b> Minutes to Read
    `
    // preview
    preview.innerHTML=e.target.value
})

// Uppercase
var uCase=document.getElementById('uCase')
uCase.addEventListener('click',()=>{
    textarea.innerHTML=""
    console.log(textarea.value)
    let updateValue=textarea.value.toUpperCase()
    console.log(updateValue)
    textarea.value=updateValue
    preview.innerHTML=updateValue

})

//lowercase

var lCase=document.getElementById('lCase')
lCase.addEventListener('click',()=>{
    textarea.innerHTML=""
    let updateValue=textarea.value.toLowerCase()
    textarea.value=updateValue
    preview.innerHTML=updateValue

})

// Clear Text
var  clearText=document.getElementById('clearText')
clearText.addEventListener('click',()=>{
    textarea.value=""
    preview.innerHTML=""
    counter.innerHTML=""
    toRead.innerHTML=""

})

// removeSpaces

var removeAllSpaces=document.getElementById('removeSpaces')

removeAllSpaces.addEventListener('click',()=>{
    let updateValue=textarea.value.replace(/ /g,"")
    textarea.value=updateValue
    preview.innerHTML=updateValue

    counter.innerHTML=`
    <b>${updateValue.split(" ").length}</b> words and
    <b>${updateValue.replace(/ /g,"").length}</b> characters
    `
    //in 1 min 125 words can be read  
    toRead.innerHTML=`
    <b>${((1/125)*updateValue.split(" ").length).toFixed(2)}</b> Minutes to Read
    `
})

// copyText
//navigator object contains the information about the browser
//Clipboard is the property by which we can cut copy paste

var copyText=document.getElementById('copyText')
copyText.addEventListener('click',()=>{
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
})



// Theme Changed
var navbarToggle=document.getElementById('navbarToggle')

function changeTheme(){
    console.log("Theme Changed")
    document.body.classList.toggle('bg-dark')
    navbarToggle.classList.toggle('navbar-dark')
    navbarToggle.classList.toggle('bg-dark')

    document.getElementById('h1').classList.toggle('text-light')

    document.getElementById('textarea').classList.toggle('bg-dark')
    document.getElementById('textarea').classList.toggle('text-light')

    document.getElementById('card1').classList.toggle('bg-dark')
    document.getElementById('card1').classList.toggle('text-light')


    document.getElementById('card2').classList.toggle('bg-dark')
    document.getElementById('card2').classList.toggle('text-light')

    document.getElementById('counter').classList.toggle('bg-dark')
    document.getElementById('counter').classList.toggle('text-light')

    document.getElementById('toRead').classList.toggle('bg-dark')
    document.getElementById('toRead').classList.toggle('text-light')

    document.getElementById('preview').classList.toggle('bg-dark')
    document.getElementById('preview').classList.toggle('text-light')
}


