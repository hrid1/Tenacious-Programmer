const prompt = require('prompt-sync')();

const mark = prompt('Enter Your Number: ');

if(mark>=80){
    console.log("A+");
}
else if(mark>=70 && mark<=79){
    console.log("A");
}
else if(mark>=60 && mark<=69){
    console.log("B");
}
else if(mark>=50 && mark<59){
    console.log("C");
}
else{
    console.log("Fail")
}
