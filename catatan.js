// =====================================
// Catatan pelatihan JavaScript
// =====================================

console
// "alat komunikasi antara programmer dan komputer"
console.log("Hello World");
// "catatan untuk menampilkan output"
console.warn("Pesan peringatan segitiga");
// "catatan untuk menampilkan pesan peringatan"
console.error("pesan peringatan silang");
// "catatan untuk menampilkan pesan kesalahan"
console.info("pesan informasi");
// "catatan untuk menampilkan pesan informasi"
console.assert("umur" > 18, "Umur lebih dari 18");
// "catatan untuk mengecek kondisi benar atau salah (true/false)"

// =====================================

let welcome = "Hello World";
// "catatan let itu untuk menyimpan data jadi di let dulu untuk menyimpan, dan console untuk menampilkan"

// =====================================

let angka = (10, 20, 30, 40);
console.table(angka);
// "catatan untuk menampilkan data dalam bentuk tabel"

// =====================================

console.log("Sebelum grup");

console.group("Data User"); 
// (/Catatan: mulai membuat grup dengan label "Data User")

console.log("Nama: Budi");
console.log("Umur: 20");
console.log("Status: Aktif");

console.groupEnd(); 
// (/Catatan: menutup grup)

// =====================================

console.time - console.timeEnd - console.timeLog
// "catatan untuk mengukur waktu eksekusi kode"

// =====================================

console.count - console.countReset
// "catatan untuk menghitung berapa kali sebuah label dipanggil"

// =====================================

alert
// "untuk menampilkan pesan di popup alert"
confirm
// "untuk menampilkan pesan di popup confirm, dengan pilihan OK dan Cancel"
prompt
// "untuk meminta input dari user di popup prompt"
document.getElementById('id').innerHTML
// "untuk menampilkan atau mengubah konten HTML di elemen dengan id tertentu"

