// ==============================
// level 1
// =============================
// console.log("hallo javascript");
// // menyimpan data di variabel welcome, menampilkan di HTML dan console

// // ==============================

// console.log(100-50);
// console.log(10*5);
// // menampilkan hasil operasi matematika pengurangan dan perkalian di consolenya

// // ==============================

// console.log('Defense Irgi Harnoyo');
// // menampilkan nama lengkap di console
// console.log('19');
// // menampilkan umur di console

// // ==============================

// alert('Selamat Datang');
// // menampilkan popup alert dengan pesan Selamat Datang

// // ==============================

// alert(15+20);
// // menampilkan popup alert dengan hasil penjumlahan 15 + 20

// // ==============================

// prompt("masukkan nama buah");
// // menampilkan popup prompt dengan pesan masukkan nama buah

// // ==============================

// prompt("masukkan asal kota");
// alert("anda berasal dari kota bandung");
// // menampilkan popup prompt dengan pesan masukkan asal kota, lalu menampilkan popup alert dengan pesan anda berasal dari kota bandung

// // ==============================

// document.getElementById("pesan").innerHTML = "ini adalah paragraf javascript";
// // menampilkan teks "ini adalah paragraf javascript" di dalam elemen HTML dengan id "tag1"

// // ==============================

// document.getElementById("judul").innerHTML = "tugas ini selesai";
// // menampilkan teks "tugas ini selesai" di dalam elemen HTML dengan id "judul"

// // ==============================

// document.getElementById("hasil hitung").innerHTML = (20/5)+10;
// // menampilkan hasil pembagian 20 dengan 5, lalu ditambah 10 di dalam elemen HTML dengan id "hasil hitung"

// // ==============================
// // level 2 (10)soal
// // =============================
// let nama = "Defense Irgi Harnoyo";
// console.log("halo " + nama);
// // menampilkan teks "halo Defense Irgi Harnoyo" di console

// // ==============================

// let hargabarang1 = 50000;
// let hargabarang2 = 100000;
// console.log(hargabarang1 + hargabarang2);
// // menampilkan hasil penjumlahan harga barang 1 dan harga barang 2 di console

// // ==============================

// let angka = prompt("masukkan angka");
// console.log(angka*2);
// // menampilkan hasil perkalian angka yang dimasukkan di prompt dengan hasil perkalian di console

// // ==============================

// let kata1 = prompt("masukkan sebuah kata");
// alert("kata yang anda masukkan adalah " + kata1);
// // menampilkan kata yang dimasukkan di prompt di popup alert

// // ==============================

// confirm("apakah anda setuju dengan kebijakan kami?")
// console.log("user setuju dengan kebijakan kami");
// // mengkonfrim pengguna dengan pesan di popup confirm, lalu menampilkan pesan di console

// // ==============================

// let nama1 = prompt("masukkan nama anda");
// console.info("informasi pengguna " + nama1)
// // menampilkan informasi nama anda yang dimasukkan di prompt dan info di console

// // ==============================

// let angka1 = prompt("masukkan angka pertama");
// let angka2 = prompt("masukkan angka kedua");
// document.getElementById('hasil-kali').innerHTML = (angka1*angka2);
// // menampilkan hasil perkalian angka pertama dan angka kedua yang dimasukkan di prompt di dalam elemen HTML dengan id "hasil-kali"

// // ===========================

// console.warn("peringatan! website ini dalam perbaikan");
// menampilkan pesan peringatan di console

// =============================

// function show() {
    // console.error("terjadi kesalahan pada data");
// }
// menampilkan pesan kesalahan di console ketika fungsi show() dipanggil

// =============================

// let salam = "selamat";
// let waktu = "pagi";
// console.log(salam + " " + waktu);

// =============================
// level 3 (10)soal
// =============================
// let number = prompt("masukkan angka");
// if (number % 2 === 0) {
//     console.log(number + " adalah angka genap");
// } else {
//     console.log(number + " adalah angka ganjil");
// }
// menampilkan di prompt minta masukkan angka dan terlihat genap atau ganjil di console

// =============================

// let nilai = prompt("masukkan nilai");
// if (nilai < 70) {
    // console.warn("nilai anda " + nilai + " (dibawah 70)");
// } else {
//   console.info("Nilai Anda " + nilai + " (diatas atau sama dengan 70)");
// }

// =============================

// let jawaban = prompt("siapakah pencipta javascript?");
// if (jawaban === "brendan eich"){
    // alert("jawaban anda  benar");
// } else {
//     alert("salah, coba lagi");
// }
// menampilkan di prompt minta masukkan jawaban dan terlihat benar atau salah di alert

// ==============================

// console.group('kelompok 1');
// console.log('irgi harnoyo');
// console.log('19 tahun');
// console.log('programmer');
// console.groupEnd();
// menampilkan di console dengan grup nama, umur, pekerjaan

// ==============================

// let nomor1 = Number(prompt("masukkan angka pertama"));
// let nomor2 = Number(prompt("masukkan angka kedua"));
// // minta input di prompt angka pertama dan kedua

// if (nomor1 > nomor2) {
//     console.table(`${nomor1} lebih besar dari ${nomor2}`);
// } else if (nomor1< nomor2) {
//     console.table(`${nomor1} lebih kecil dari ${nomor2}`);
// } else {
//     console.table(`${nomor1} sama dengan ${nomor2}`); 
// }
// menampilkan di console dengan tabel perbandingan angka pertama dan kedua

// ==============================

// let usia = prompt("masukkan umur anda");
// if (usia >= 13 && usia <= 19) {
//     alert("anda berusia remaja");
// } else {
//     alert("anda belum berusia remaja");
// }
// && ini itu artinya dan, jika || ini itu artinya atau
// menampilkan di prompt minta masukkan umur dan terlihat remaja atau belum di alert

// ==============================

// let jumlah = prompt("masukkan jumlah total belanja");
// if (jumlah >= 100.000) {
//     alert("selamat anda mendapatkan diskon 10%");
// } else {
//     alert("belanja lagi untuk mebdapatkan diskon!");
// }
// >= ini itu artinya lebih dari atau sama dengan jika <= kurang dari atau sama dengan
// menampilkan di prompt minta masukkan jumlah total belanja dan terlihat diskon atau tidak di alert

// ==============================

// let konfirmasi = confirm("apakah anda ingin melanjutkan");
// if (konfirmasi) {
//     document.getElementById('status').innerHTML = "anda melanjutkan";
// } else {
//     document.getElementById('status').innerHTML = "anda membatalkan";
// }
// menampilkan di popup confirm dengan pesan apakah anda ingin melanjutkan jika ok terlihat anda melanjutkan di HTML dengan id status, jika cancel terlihat anda membatalkan di HTML dengan id status

// ==============================

// console.time("waktu eksekusi");
// // memulai pengukuran waktu eksekusi dengan label "waktu eksekusi"

// for (let i = 1; i <= 1000; i++);
//     // melakukan perulangan dari 1 sampai 1000

// console.timeEnd("waktu eksekusi");
// mengakhiri pengukuran waktu eksekusi dengan label "waktu eksekusi"

// ==============================

// Menggunakan nama variabel yang konsisten ('nama' dan 'usia')
// let nama = prompt("masukkan nama");
// let tahunLahir = prompt("masukkan tahun lahir");

// // Menggunakan fungsi Number() yang benar dan variabel yang jelas
// let tahunSekarang = 2025;

// // Mengonversi input tahunLahir menjadi angka sebelum menghitung
// let usia = tahunSekarang - Number(tahunLahir);

// console.log(`Halo ${nama}, usia Anda adalah ${usia} tahun.`);

// ==============================
