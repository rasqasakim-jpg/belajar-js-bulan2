import { totalPendapatan, totalPengeluaran } from "./keuangan/index.js";

const pendapatan = [50000,25000,30000];
const pengeluaran = [20000,15000,10000];

console.log("total pendapatan: ", + totalPendapatan(pendapatan));
console.log("total pengeluaran: ", + totalPengeluaran(pengeluaran));
console.log("total pendapatan vs pengeluaran: ", totalPendapatan(pendapatan) - totalPengeluaran(pengeluaran));

