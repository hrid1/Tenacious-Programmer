console.log("Hi bro");

// -------------------  Event Handler--------------

// option:- 1 (directly set on the html file)

// option:- 2
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option:- 3

const makeGreenBtn = document.getElementById("make-green");
makeGreenBtn.onclick = makeGreen;

function makeGreen() {
  document.body.style.backgroundColor = "green";
}

// option:- 3 another

const orangeBtn = document.getElementById("make-orange");
orangeBtn.onclick = function makeOrange() {
  document.body.style.backgroundColor = "orange";
};

// option:- 4

const purpleBtn = document.getElementById("make-purple");
purpleBtn.addEventListener("click", makePurple);

function makePurple() {
  document.body.style.backgroundColor = "purple";
}

// option:-4 another

const pinkBtn = document.getElementById("make-pink");
pinkBtn.addEventListener("click", function makePink() {
  document.body.style.backgroundColor = "pink";
});

// option:-4 other

const goldBtn = document.getElementById("make-gold");
goldBtn.addEventListener("click", function(){
    document.body.style.backgroundColor ="goldenrod";
} )
