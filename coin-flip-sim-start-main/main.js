// flip the dice simulator
// HTML Variables
let outputEl = document.getElementById("output");
let face1El = document.getElementById("face1");
let face2El = document.getElementById("face2");
let face3El = document.getElementById("face3");
let face4El = document.getElementById("face4");
let face5El = document.getElementById("face5");
let face6El = document.getElementById("face6");

//count variables
let numFace1 = 0;
let numFace2 = 0;
let numFace3 = 0;
let numFace4 = 0;
let numFace5 = 0;
let numFace6 = 0;

//Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  //simulate dice flip
  if (randNum <= 0.1) {
    outputEl.innerHTML = "<img src='img/1.png'/>";
    numFace1++;
    face1El.innerHTML = numFace1;
  } else if (randNum <= 0.2) {
    outputEl.innerHTML = "<img src='img/2.png'/>";
    numFace2++;
    face2El.innerHTML = numFace2;
  } else if (randNum <= 0.4) {
    outputEl.innerHTML = "<img src='img/3.png'/>";
    numFace3++;
    face3El.innerHTML = numFace3;
  } else if (randNum <= 0.6) {
    outputEl.innerHTML = "<img src='img/4.png'/>";
    numFace4++;
    face4El.innerHTML = numFace4;
  } else if (randNum <= 0.8) {
    outputEl.innerHTML = "<img src='img/5.png'/>";
    numFace5++;
    face5El.innerHTML = numFace5;
  } else {
    outputEl.innerHTML = "<img src='img/6.png'/>";
    numFace6++;
    face6El.innerHTML = numFace6;
  }
}
// // COIN FLIP SIMULATOR

// // HTML Variables
// let outputEl = document.getElementById("output");
// let headsEl = document.getElementById("heads-out");
// let tailsEl = document.getElementById("tails-out");

// // count variables
// let numHeads = 0;
// let numTails = 0;

// // Button event listener
// document.getElementById("btn").addEventListener("click", btnClicked);

// function btnClicked() {
//   //Generate a random number
//   let randNum = Math.random();
//   console.log(randNum);

//   // Simulate the coin flip
//   if (randNum < 0.5) {
// outputEl.innerHTML = "<img src='img/heads.png'/>";
// numHeads++;
//     headsEl.innerHTMl = numHeads;
//   } else {
//     outputEl.innerHTML = "<img src='img/tails.png'/>";
//     numTails++;
//     tailsEl.innerHTML = numTails;
//   }
// }
