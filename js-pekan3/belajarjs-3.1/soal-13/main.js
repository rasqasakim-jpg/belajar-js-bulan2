import { booking } from './layanan/boking.js';

const jadwalTersedia = ["08:00", "10:00", "13:00"];
console.log("Booking 10:00 →", booking(jadwalTersedia, "10:00")); // true
console.log("Booking 09:00 →", booking(jadwalTersedia, "09:00")); // false
