const prompt = require('prompt-sync')();

const height = prompt("Enter the Height: ");
const weight = prompt("Enter the Weight: ");
const bmi = weight/(height)**2;
console.log(bmi.toFixed(2));

if(bmi <18.5){
    console.log("You'r underweight!")
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You'r normal.")
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("You'r OverWeight.")
}
else{
    console.log("You'r are obese!")
}