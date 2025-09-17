// main.js
import { grayscale, brightness, tambahBlur } from './foto/index.js';

const foto = { nama: "foto1.jpg" };

console.log("Grayscale:", grayscale(foto));
console.log("Brightness:", brightness(foto));
console.log("Blur:", tambahBlur(foto));
