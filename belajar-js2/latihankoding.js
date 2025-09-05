// ================================
// level 1
// ================================
//1. membuat variable nama lengkap dan menyimpan nama lengkap
// let namalengkap = "irgi harnoyo";
// // menampilkan nama lengkap ke console
// console.log("nama lengkap: " +  namalengkap);
// // buat dua variable dengan valuenya angka
// let angka1 = 15;
// let angka2 = 5;
// // tampilkan hasil penjumlahan kedua variable angka di console
// console.log("hasil tambah: " + (angka1 + angka2));

// ================================

//2. ubah angka1 jadi 20
// let angka1 = 20;
// let angka2 = 5;
// // kalikan kedua variable angka
// let hasil = angka1 * angka2;
// // tampilkan hasil perkalian di console
// console.log("hasil kali: " + hasil);

// ================================

//3. buat dua variable dengan valuenya angka
// let x = 10;
// let y = 3;
// // sisabagi kedua variable angka
// let sisabagi = x % y;
// // tampilkan hasil sisabagi di console
// console.log("sisa bagi: " + sisabagi);

// ================================

//4. buat variable dengan value 100000 dan 25000
// let saldo = 100000
// let kurang = 25000
// // kurangi kedua variable
// let sisasaldo = saldo - kurang
// // tampilkan hasil pengurangan di console
// console.log("sisa saldo: " + sisasaldo);

// ================================

//5. buat variable isStudent dengan value true
// let isStudent = true;
// // tampilkan isStudent di console
// console.log("is student: " + isStudent);

// ================================

//6. let panjang = 7;
// let lebar = 4;
// let tinggi = 6;

// let volume = panjang * lebar * tinggi;
// console.log("volume balok: " + volume);

// ================================

//7. buat variable harga dengan value 50000
// let harga = 50000;
// // tambahkan variable harga dengan 10000 tampilkan di console
// console.log(harga += 10000);

// ================================

//8. buat variable greeting dengan value selamat 
// let greeting = "selamat";
// // tambahkan variable dengan pagi tampilkan di console
// console.log(greeting += "pagi");

// ================================

// 9. buat variable totalpembelian 
// let totalpembelian = 150000
// // beri diskon 10%
// totalpembelian *= 0.9
// // tampilkan total pembelian di console
// console.log(totalpembelian);

// ================================
// level 2
// ================================
//1. buat variable umurbudi dan andi
// let umurbudi = 25;
// let umurandi = 30;
// // cek budi apa lebih muda dengan <
// let budilebih = umurbudi < umurandi;
// // tampilkan di console
// console.log( "budi lebih muda dari andi " + budilebih );

// ================================

//2. buat variabel password
// let password = "rahasia123";
// // cek apakah password sama dengan string "rahasia123"
// let cekPassword = password === "rahasia123";
// // tampilkan hasilnya (true kalau sama)
// console.log("Apakah password benar?", cekPassword);

// ================================

//3. buat variable nilai ujian
// let nilaiujian = 85;
// // cek nilai apakah lebih dari atau kurang dari
// let cekAntara = "nilaiujian >= 80 && nilaiUjian <= 90";
// // tampilkan di console
// console.log("apakah nilai ujian diantara 80 dan 90?", nilaiujian >= 80 && nilaiujian <= 90);

// ================================

//4. buat variabel cuaca dan adapayung 
// let cuaca = "hujan"
// let adapayung = true
// // kalau cuaca "hujan" atau adapayung maka true
// let cekkondisi = (cuaca === "hujan") || adapayung;
// // tampilkan hasilnya
// console.log(cekkondisi);

// ================================

//5. bikin fungsi bernama sapa
// function sapa() {
//   //saat dipanggil, fungsi ini akan menampilkan pesan
//   console.log("Halo, selamat datang!");
// }
// //panggil fungsi sapa
// sapa();

// =================================

// 6. bikin fungsi jumlahkan
// function jumlahkan(a,b) {
//   // return itu gunanya untuk mengembalikan nilai dari sebuah fungsi,kalau kita tidak pakai fungsi ungsi cuma ngerjain sesuatu di dalamnya, tapi hasilnya nggak bisa dipakai lagi di luar fungsi. 
//   return a + b;
// }
// // panggil fungsi jumlahkan dan tampilkan hasilnya
// console.log(jumlahkan(5,10));
// // panggil fungsi
// jumlahkan(5,10);

// =================================

//7. buat variable nilai
// let nilai = 75;
// // jika nilai lebih dari 70 maka true
// if (nilai >= 70){
//   console.log("anda lulus")
//   // jika tidak maka false
// } else {
//   console.log("anda tidak lulus")
// }

// =================================

//8. buat variabel angka
// let angka = 10
// // cek apakah angka genap atau ganjil, == itu sama dengan 
// if (angka == 10) {
//   console.log("maka itu genap");
// } else {
//   // tampilkan di console 
//   console.log("maka itu ganjil");
// }

// =================================

//9. 
// function cekUmur() {
//   let cekumur = 18;
//   if (cekumur > 17 ) {
//     console.log("anda sudah dewasa")
//   } else {
//     console.log("anda belum dewasa")
//   }
  
// }
// cekUmur();

// =================================

//10. 
// function cekNilai() {
//   let nilai = 95;
//   if (nilai > 90) {
//     console.log("anda mendapat nilai A");
//   } else {
//     console.log("anda tidak mendapat nilai A");
//   }
// }
// cekNilai();

// =================================
// level 3
// =================================
//1. buat variable nama dan prompt
// let nama = prompt ("masukkan nama anda")
// // buat if jika nama diisi maka keluar console selamat datang
// if (nama) {
//     console.log("selamat datang " + nama + "!")
//     // jika tidak maka keluar console anda tidak memasukkan nama
// } else {
//     console.log("anda tidak memasukkan nama")
// }

// =================================

//2. buat fungsi hitungdiskon
// function hitungDiskon(totalBelanja,persenDiskon) {
//     // hitung diskon
//     let diskon = totalBelanja * (persenDiskon / 100);
//     // hitung total setelah diskon
//     let totalSetelahDiskon = totalBelanja - diskon;
//     // kembalikan total setelah diskon
//     return totalSetelahDiskon;    
// }

// =================================

//3. buat fungsi hitungpajak
// function hitungPajak(gaji,persenPajak) { 
//     // hitung pajak
//     let pajak = gaji * (persenPajak / 100);
//     // hitung setelah pajak
//     let setelahPajak = gaji - pajak;
//     // kembalikan setelah pajak
//     return setelahPajak;    
// }

// =================================

//4. buat fungsi cekKekayaan
// function cekKelayakan(umur, punyaSim) {
//   // cek jika umur lebih dari 18 DAN punyaSim = true
//   if (umur > 18 && punyaSim) {
//     // tampilkan di console
//     console.log("Anda layak mengemudi.");
//     // jika tidak maka false
//   } else {
    
//     console.log("Anda belum layak mengemudi.");
//   }
// }
// cekKelayakan(25, true);
// cekKelayakan(15, false);


// =================================

//5. 
// function cekSuhu(suhu) {
//     if (suhu > 30) {
//         console.log("Suhu panas.");
//     } else if (suhu >= 20 && suhu <= 30) {
//         console.log("Suhu normal.");
//     } else {
//         console.log("Suhu dingin.");
//     }
// }
// cekSuhu(35); 
// cekSuhu(25); 
// cekSuhu(15);