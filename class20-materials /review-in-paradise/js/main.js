// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = 'salad'
faveFood = 'tinga'

//alert(faveFood);


//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let salad = 'I like miso soup'
//alert(salad[1]);

//alert(salad.charAt(1))

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNum(n1, n2, n3) {
    let prod = (n1 / n2) * n3
    alert(prod);
}

threeNum(12,3,4)
alert(threeNum)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function oneNum(n1) {
    console.log(Math.cbrt(n1));
}
oneNum(9)



// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
