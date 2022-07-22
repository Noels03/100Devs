// *Variables*
// Create a variable and console log the value

let x = 3
console.log(x)

// Create a variable, add 10 to it, and alert the value

let addTen = 3

addTen = addTen + 10

alert(addTen)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

function subFourNums(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
subFourNums(5,4,3,2,1)

// Create a function that divides one number by another and returns the remainder

function divideNums(n1, n2){
    return n1 % n2
}
console.log(divideNums(12, 3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoAlertJumanji(n1,n2){
    if(n1 + n2 > 50){
        alert('Jumanji')
    }
}
addTwoAlertJumanji(50,1)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplyThree(n1,n2,n3){
    let product = n1 * n2 * n3
    if(product % 3 === 0){
        alert('Zebra')
    }
}
multiplyThree(3,3,1)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in

function logWord(word,num){
    for(let i = 1; i <= num; i++){
        console.log(word)
    }
}

logWord('wonderful', 21)