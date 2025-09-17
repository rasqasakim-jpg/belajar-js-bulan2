import bukuUtils from "./buku.js";

const koleksi = [
    { judul: "Belajar JavaScript", pengarang: "ucup", halaman: 250 },
    { judul: "Gadis Kretek", pengarang: "kahfi", halaman: 400 },
    { judul: "Bumi Manusia", pengarang: "xena", halaman: 320 }
]

console.log("Jumlah buku: " + bukuUtils.hitungJumlah(koleksi));
console.log("cari buku:");
console.log(bukuUtils.cariBuku(koleksi, "Gadis Kretek"));
console.log("pengarang, halaman:");
console.log(bukuUtils.bukuTebal(koleksi));


