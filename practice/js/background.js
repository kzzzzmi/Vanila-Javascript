const images = ["img/1.jpeg", "img/2.jpeg", "img/3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const url = "url(" + chosenImage + ") no-repeat";

const body = document.querySelector("body");

body.style.background = url;

// const image = document.createElement("img");

// image.src = `img/${chosenImage}`;

// document.body.appendChild(image);
