// *Variables*
// Declare a variable, assign it a boolean, and alert the value

let first = true 
    alert(first)

// Declare a variable, reassign it to your favorite color, and console log the value

let color = 'green' {
    console.log(color)
}

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function sumNum(w,x,y,z) {
    return (w + x + y) / z
} 

sumNum(10,20,30,5)

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.

function morePowaaaa(robot,duck){
    console.log(Math.pow(robot, duck))
}
morePowaaaa(4,2)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

 function alertOrLog(b, str) {
    if(b){
        alert(str)
    }else{
        console.log(str)
    }
}

//b ? alert(str) : console.log(str) //right will run if true or left if false

//const alertOrLog = (b, str) => b ? alert(str) : console.log(str) //all in one line

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number

function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
            if(i % 3 === 0 && i % 5 === 0){
                console.log(fizzbuzz)
            }else if(i % 5 === 0){
                console.log('Buzz')
            }else if(i % 3 === 0){
                console.log('Fizz')
            }else{
                console.log(i)
            }
    }
}