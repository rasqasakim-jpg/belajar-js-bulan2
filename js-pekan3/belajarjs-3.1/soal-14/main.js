import { Kasir, pajak, diskon, kembalian, hitungSubtotal } from './kasir/index.js';

const belanja = [2000, 3000, 5000]; 
const bayar = 15000;

const total1 = Kasir.subtotal(belanja);
console.log("Subtotal (namespace):", total1);

const total2 = hitungSubtotal(belanja);
console.log("Subtotal (alias):", total2);

console.log("Pajak 10%:", pajak(total1));
console.log("Setelah Diskon 5%:", diskon(total1));
console.log("Kembalian:", kembalian(bayar, total1 + pajak(total1)));
