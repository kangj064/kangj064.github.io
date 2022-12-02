

console.log("hello!");

let navElement = document.querySelector(".nav");
console.log("my nav element:", navElement);

function turnOnLight() {
  console.log("Lights on!");
}


let button = document.querySelector(".button");
button.addEventListener("click", turnOnLight);

var bleep = new Audio();
bleep.src= "http://www.pachd.com/a/button/button1.wav";
//bleep.src="http://tones.mob.org/ringtone/6JtZSnk6GkPf6NOd50afNg/1489000592/253e0a2c2071fbbf71b06a6470248fd0/minions-banana.mp3";
