let name ='Application to compare two numbers'

console.log(name)

let num1, num2

num1 =prompt("Enter the first number:")
num2 = prompt("Enter the second number:")

if(num1 > num2){

    console.log(`${num1} is the larger number among the entered numbers ${num1} and ${num2}.`)
}

else if(num2 > num1){

    console.log(`${num2} is the larger number among the entered numbers ${num1} and ${num2}.`)
}
else{
    
    console.log("Both the entered numbers are equal.")
}