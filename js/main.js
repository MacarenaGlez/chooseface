"use strict";

let selectMood = document.querySelector("select");
let emojiSpan = document.querySelector(".face");
const btn = document.querySelector("button");
const body = document.querySelector("body");

//Función para que aparezca el emoji al clickar en el botón update
function showMood() {
  emojiSpan.innerHTML = selectMood.value;
}

btn.addEventListener("click", showMood);

//Función para generar el random
function getRandomInt() {
  let numRandom = Math.floor(Math.random() * (100 - 0)) + 0;
  console.log(numRandom);

  //saca si es par o impar
  if (numRandom % 2 === 0) {
    console.log("Es un nº par");
    body.classList.toggle("faceOne");
  } else {
    console.log("Es un nº impar");
    body.classList.toggle("otherFace");
  }
}
btn.addEventListener("click", getRandomInt);
