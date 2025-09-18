import { urutkanBerdasarkanHarga } from "./menu/index.js";

const daftarMenu = [
    {nama: "nasi goreng", harga: 15000},
    {nama: "ayam goreng", harga: 20000},
    {nama: "rendang", harga: 35000},
];

console.log(urutkanBerdasarkanHarga(daftarMenu));
