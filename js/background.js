const images = ["0.jpg", "1.jpg", "2.jpg"];
const idx = Math.round(Math.random()*(images.length-1));

const bgImage = document.createElement("img");
bgImage.src = `img/${images[idx]}`;

document.body.appendChild(bgImage);