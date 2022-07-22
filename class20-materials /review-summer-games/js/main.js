//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function multiplyTogether(arr){
    let product = 1
    arr.forEach(bingBong => product *= bingBong)
    alert(product)  
}
//dont need to declare arr because it is a parameter
//value is passed into the parameter, it is not a variable

multiplyTogether([10,2,3])

//for loop would be, replace into arr.forEach spot

for (let i = 0; i < arr.length; i++){
    product *= arr[i]
}