console.log("This is a test");

const primaryGoal = document.getElementById("primary-goals");
// console.log(primaryGoal);
const li4 = document.createElement("li");
li4.innerText = "English";
primaryGoal.appendChild(li4);


const personDiv = document.getElementById("person-div");
console.log(personDiv);

personDiv.classList.add('person');