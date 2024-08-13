const age = 18;
const profession = "Student";
const ticketPrice = 100;
if(age<10){
    console.log("Free!")
}
else if((age>=10 && age<=60 ) && profession === 'Student') {
    console.log(ticketPrice*.5);
}
else if(age >= 60){
    console.log(ticketPrice*0.15)
}
else{
    console.log(ticketPrice);
}