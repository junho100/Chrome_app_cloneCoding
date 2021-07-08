const images = ["0.jpg", "1.jpg", "2.jpg"];
const idx = Math.round(Math.random()*(images.length-1));

document.body.style.backgroundImage = `url('img/${images[idx]}')`;
