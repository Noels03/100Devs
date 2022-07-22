//Create a button that adds 1 to a botScore stored in localStorage 

if(localStorage.getItem('botScore')){
    
}
localStorage.setItem('botScore', 0)

//runs add another one
document.querySelector('button').addEventListener('click', addAnothaOne)

function addAnothaOne(){
    let botScoreVal = Number(localStorage.getItem('botScore')) //stores score
    botScoreVal += 1 //adds one
    localStorage.setItem('botScore', botScoreVal) //gets old score and adds one to it
}
