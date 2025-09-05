// ============================
// if else (5 soal)
// ============================
//1. buat fungsi cekwaktushalat
// function cekWaktuShalat(jam){
//     // jika jam antara 4-5 itu subuh 
//     if (jam >= 4 && jam <= 5){
//         console.log("waktu subuh");
//     // jika jam antara 12-13 itu dzuhur
//     }else if (jam >= 12 && jam <= 13){
//         console.log("waktu dzuhur");
//      // jika jam antara 15-16 itu ashar
//     }else if (jam >= 15 && jam <= 16){
//         console.log("waktu ashar");
//     // jika jam antara 18-19 itu magrib
//     }else if (jam >= 18 && jam <= 19){
//         console.log("waktu maghrib");
//     // jika jam antara 19-20 itu isya
//     }else if (jam >= 19 && jam <= 20 ){
//         console.log("waktu isya")
//     // selain kondisi diatas waktu shalat
//     }else {
//         console.log("bukan waktu")
//     }
// }
// panggil fungsi
// cekWaktuShalat(4)
// cekWaktuShalat(12)
// cekWaktuShalat(15)
// cekWaktuShalat(18)
// cekWaktuShalat(19)
// cekWaktuShalat()

// ============================

//2. buat fungsi
// function validasiUsia(usia) {
//     // jika usia 12-18 
//     if (usia >= 12 && usia <= 18) {
//         console.log("layak mondok")
//         // selain itu tidak layak mondok
//     } else {
//         console.log("tidak layak mondok")
//     }
// }
// // panggil fungsi
// validasiUsia(15)

// =============================

//3. buat fungsi
// function nilaiAkhlaksantri(nilai) {
//         // jika nilai lebih besar atau sama dengan 85 
//         if (nilai >= 85) {
//             console.log("akhlak mulia")
            
//         } else if (nilai <= 85) {
//             console.log("perlu pembinaan")
//         }
// }
//  panggil fungsi
// nilaiAkhlaksantri(90)
// nilaiAkhlaksantri(70)

// =============================

//4. buat fungsi perlengkapanShalat, dan parameternya
// function perlengkapanShalat(pakaiSarung,pakaiKopiah,bawaSajadah) {
//             // jika semua perlengkapan true semua
//             if (pakaiSarung == true && pakaiKopiah == true && bawaSajadah == true) {
//                 // maka siap shalat
//                 console.log("siap shalat")
//                 // jika salah satu false maka belum siap shalat
//             } else {
//                 // maka belum siap shalat
//                 console.log("belum siap shalat ")
//             }
// }
// // panggil fungsi
// perlengkapanShalat(true,true,true)
// perlengkapanShalat(true,true,false)

// =============================

//5. buat fungsi
// function cekIzinKeluarPondok(alasan) {
//             let alasanLower= alasan.toLowerCase();
//             // jika alasan sama dengan "jenguk keluarga" atau "sakit"
//             if (alasanLower == "jenguk keluarga" || alasanLower == "sakit") {
//                 // maka diizinkan
//                 console.log("diizinkan");
//                 // selain itu tidak diizinkan
//             } else {
//                 // maka tidak diizinkan
//                 console.log("tidak diizinkan");
//             }

            
// }
// // panggil fungsi
// cekIzinKeluarPondok("sakit")
// cekIzinKeluarPondok("main ps")

// ============================
// switch (5 soal)
// ============================
//6. buat fungsi menampilkan kegiatan harian
// function jadwalKegiatanHarian(hari) {
//     // switch dipakai untuk mengecek banyak variabel hari
//             switch (hari) {
//                 // jika hari 1
//                 case 1 :
//                     // maka hari senin belajar html
//                     console.log("hari senin: belajar html")
//                     // break supaya tidak lanjut di case berikutnya
//                     break;
//                 case 2 :
//                     console.log("hari selasa: belajar css")
//                     break;
//                 case 3 :
//                     console.log("hari rabu: belajar js")
//                     break;
//                 case 4 :
//                     console.log("hari kamis: belajar react")
//                     break;
//                 case 5 :
//                     console.log("hari jumat: belajar nodejs")
//                     break;
//                 case 6 :
//                     console.log("hari sabtu: belajar react native")
//                     break;
//                 case 7 :
//                     console.log("hari minggu: belajar flutter")
//                     break;
//                     // jika hari tidak cocok dengan hari 1-7
//                 default:
//                     // maka hari tidak ditemukan
//                     console.log("hari tidak ditemukan")
//             }
// }
// // panggil fungsi
// jadwalKegiatanHarian(1)
// jadwalKegiatanHarian(2)
// jadwalKegiatanHarian(3)
// jadwalKegiatanHarian(4)
// jadwalKegiatanHarian(5)
// jadwalKegiatanHarian(6)
// jadwalKegiatanHarian(7)
// jadwalKegiatanHarian(8)

// ============================

//7. 
// function menuKantinSantri(menu) {
//             switch (menu) {
//                 case 1 :
//                     console.log("1. nasi goreng")
//                     break;
//                 case 2 :
//                     console.log("2. bakso")
//                     break;
//                 case 3 :
//                     console.log("3. aqua botol")
//                     break;
//                 case 4 :
//                     console.log("4. susu")
//                     break;
//                 case 5 :
//                     console.log("5. martabak")
//                     break;
//                 default:
//                     console.log("menu tidak ada")
//             }
            
    
// }
// // panggil fungsi
// menuKantinSantri(1)
// menuKantinSantri(2)
// menuKantinSantri(3)
// menuKantinSantri(4)
// menuKantinSantri(5)
// menuKantinSantri(6)

// ============================

//8. buat fungsi 
// function kodeKamarAsrama(kode) {

//             // mengubah angka ke string, lalu ambil karakter pertama
//             let digitpertama = String(kode)[0];
//             switch (digitpertama) {
//                 case "1":
//                     console.log("asrama putra");
//                     break;
//                 case "2":
//                     console.log("asrama putri");
//                     break;
//                 case "3":
//                     console.log("asrama SPA");
//                     break;
//                 default:
//                     console.log("kode tidak ditemukan");
//             }
            
// }
// // panggil fungsi
// kodeKamarAsrama(1)
// kodeKamarAsrama(2)
// kodeKamarAsrama(3)
// kodeKamarAsrama(4)

// ============================ 

//9.
// function tingkatPelanggaran(kode) {
//                 switch (kode) {
//                     case 1 :
//                         console.log("nasihat")
//                         break;
//                     case 2 :
//                         console.log("hafalan taubat")
//                         break;
//                     case 3 :
//                         console.log("kerja sosial")
//                         break;
//                     case 4 :
//                         console.log("skors")
//                         break;
//                     default:
//                         console.log("kode pelanggaran tidak valid")
//                 }
// }
// tingkatPelanggaran(1)
// tingkatPelanggaran(2)
// tingkatPelanggaran(3)
// tingkatPelanggaran(4)
// tingkatPelanggaran(5)

// ============================

//10.
// function jabatanPengurusPondok(jabatan) {
//     switch (jabatan.toLowerCase()) {
//         case "kepala pondok":
//             console.log("tugas utama: memimpin dan mengelola seluruh kegiatan pondok");
//             break;
//         case "sekretaris":
//             console.log("tugas utama: mengelola administrasi dan surat menyurat");
//             break;
//         case "bendahara":
//             console.log("tugas utama: mengelola keuangan pondok");
//             break;
//         case "koordinator keamanan":
//             console.log("tugas utama: menjaga ketertiban dan keamanan santri");
//             break;
//         default:
//             console.log("jabatan tidak dikenal");
//     }
// }
// jabatanPengurusPondok("Kepala Pondok");
// jabatanPengurusPondok("sekretaris");
// jabatanPengurusPondok("Bendahara");
// jabatanPengurusPondok("Koordinator Keamanan");
// jabatanPengurusPondok("Guru Ngaji");

// ============================
// For Loop (5 soal)
// ============================

//11. buat fungsi
// function daftarSantriHadir(namaSantri) {
//     // menampilkan daftar santri yang hadir
//     console.log("Daftar Santri Hadir:");
//     // Ini adalah perulangan for.
//     // let i = 0 → mulai hitung dari index 0 (array dimulai dari 0).
//     // i < namaSantri.length → perulangan berhenti saat i mencapai panjang array.
//     // i++ → setiap putaran, i bertambah 1.
//     for (let i = 0; i < namaSantri.length; i++) {
//     // Menampilkan nama santri sesuai index:
//     // ${i + 1} → nomor urut mulai dari 1 (bukan 0).
//     // ${namaSantri[i]} → ambil nama santri sesuai posisi array.
//     // (`...`) dipakai supaya bisa gabung teks + variabel dengan ${}.
//         console.log(`${i + 1}. ${namaSantri[i]}`);
//     }
// }
// // membuat array berisi daftar namasantri
// const namaSantri = ["ucup", "toriq", "xena", "kahfi"];
// // panggil fungsi
// daftarSantriHadir(namaSantri);

// // ============================

// //12. buat fungsi
// function totalHafalanMingguan(hafalanPerHari) {
//     // buat variable
//     let totalHafalan = 0;
//     // perulangan untuk menambahkan semua hafalan perhari
//     for (let i = 0; i < hafalanPerHari.length; i++) {
//         // total ditambah dengan hafalan perhari
//         totalHafalan += hafalanPerHari[i];
//     }
//     // tampilkan total hafalan mingguan
//     console.log(`Total hafalan mingguan: ${totalHafalan} ayat`);
// }
// // array berisi jumlah ayat hafalan perhari
// const hafalanPerHari = [10, 5, 8, 12, 6, 9, 7];
// // panggil fungsi
// totalHafalanMingguan(hafalanPerHari);

// ============================

//13.buat fungsi
// function tabelJadwalSholat(jadwal) {
//     // menampilkan judul tabel
//            console.log("====== jadwal sholat ======");
//            // perulangan untuk menampilkan jadwal sholat
//             for (let i = 0; i < jadwal.length; i++) {
//                 // menampilkan jadwal sholat
//              console.table([`${jadwal[i].jam} - ${jadwal[i].kegiatan}`]);
//                      }
                
// }
// // array berisi jadwal sholat
// const jadwalsholat = [
//     {jam: "04:00", kegiatan: "subuh"},
//     {jam: "12:00", kegiatan: "dzuhur"},
//     {jam: "15:00", kegiatan: "ashar"},
//     {jam: "18:00", kegiatan: "maghrib"},
//     {jam: "19:00", kegiatan: "isya"}

// ];
// // panggil fungsi
// tabelJadwalSholat(jadwalsholat);

// ============================

//14.
// function motivasiSantri(N) {
//   if (!Number.isInteger(N) || N < 1) {
//     console.error("N harus bilangan bulat >= 1");
//     return;
//   }

//   for (let i = 1; i <= N; i++) {
//     console.log(i + ". Semangat Santri!");
//   }
// }
// motivasiSantri(5);

// ============================

//15.
// function polaBintangSegitiga(N) {
//     for (let i = 0; i < N; i++) {
//         let bintang = "";
//         for (let j = 0; j <= i; j++) {

//             bintang += "*";
//         }
//         console.log(bintang);        
//     }
// }
// polaBintangSegitiga(5);

// ============================
//operator (aritmatika, comparison, logic)
// ============================

//16. 
// function hitungZakat(harta) {
//   // misal nisab setara dengan 85 gram emas
//   // di sini kita asumsikan 1 gram emas = Rp 1.000.000
//   // jadi 85 gram = Rp 85.000.000
//   let nisab = 85000000; // batas minimal harta wajib zakat

//   // cek apakah harta santri lebih besar atau sama dengan nisab
//   if (harta >= nisab) {
//     // jika iya, hitung zakat 2.5% dari harta
//     let zakat = harta * 2.5 / 100; // rumus: harta × 2.5%
//     console.log("Jumlah zakat: Rp " + zakat); // tampilkan hasil zakat
//   } else {
//     // jika harta masih di bawah nisab
//     console.log("Belum wajib zakat"); // tampilkan pesan belum wajib
//   }
// }

// // Contoh penggunaan fungsi:

// hitungZakat(100000000); 
// // harta = 100 juta
// // karena ≥ 85 juta → wajib zakat

// hitungZakat(50000000); 
// // harta = 50 juta
// // karena < 85 juta → belum wajib zakat

// // ============================

// //17.
// function loginSantri(usernameInput, passwordInput) {
//   // Data tersimpan (sebagai contoh)
//   let usernameTersimpan = "santri123"; 
//   let passwordTersimpan = "rahasia";

//   // Cek apakah username dan password sama dengan data tersimpan
//   if (usernameInput === usernameTersimpan && passwordInput === passwordTersimpan) {
//     console.log("Login berhasil"); // kalau cocok
//   } else {
//     console.log("Login gagal"); // kalau tidak cocok
//   }
// }

// // Contoh penggunaan fungsi:

// loginSantri("santri123", "rahasia");  
// // username dan password cocok → output "Login berhasil"

// loginSantri("santri123", "salah");    
// // password salah → output "Login gagal"

// loginSantri("userlain", "rahasia");  
// // username salah → output "Login gagal"

// // ============================

// //18.
// function cekKelulusan(hafalan, akhlak) {
//   // syarat hafalan minimal 10 ayat
//   // syarat akhlak minimal 80
//   if (hafalan >= 10 && akhlak >= 80) {
//     console.log("Lulus"); // jika kedua syarat terpenuhi
//   } else {
//     console.log("Belum Lulus"); // jika salah satu tidak terpenuhi
//   }
// }

// // Contoh penggunaan fungsi:

// cekKelulusan(12, 85);  
// // hafalan = 12 (cukup), akhlak = 85 (cukup) → output "Lulus"

// cekKelulusan(8, 90);   
// // hafalan = 8 (kurang), akhlak = 90 → output "Belum Lulus"

// ============================

//19.
// function hitungDiskon(usia, totalBelanja) {
//   // variabel untuk menyimpan total akhir setelah diskon
//   let totalAkhir;

//   // cek syarat diskon
//   if (usia < 18 || totalBelanja > 1000000) {
//     // jika syarat terpenuhi → diskon 10%
//     let diskon = totalBelanja * 10 / 100; // hitung diskon 10%
//     totalAkhir = totalBelanja - diskon;   // kurangi total belanja dengan diskon
//     console.log("Dapat diskon 10%. Total bayar: Rp " + totalAkhir);
//   } else {
//     // jika tidak memenuhi syarat → tanpa diskon
//     totalAkhir = totalBelanja;
//     console.log("Tidak dapat diskon. Total bayar: Rp " + totalAkhir);
//   }
// }

// // Contoh penggunaan fungsi:

// hitungDiskon(16, 500000);  
// // usia 16 (<18) → dapat diskon 10%

// hitungDiskon(20, 2000000); 
// // belanja 2 juta (>1 juta) → dapat diskon 10%

// ===========================

//20.
// function validasiPassword(password) {
//   // cek panjang minimal 8 karakter
//   let panjangCukup = password.length >= 8;

//   // cek ada huruf kapital (A-Z)
//   let adaKapital = password.match(/[A-Z]/);

//   // cek ada huruf kecil (a-z)
//   let adaKecil = password.match(/[a-z]/);

//   // cek ada angka (0-9)
//   let adaAngka = password.match(/[0-9]/);

//   // valid jika semua syarat terpenuhi
//   if (panjangCukup && adaKapital && adaKecil && adaAngka) {
//     console.log("Password valid");
//   } else {
//     console.log("Password tidak valid");
//   }
// }

// // Contoh penggunaan:
// validasiPassword("Abc12345"); 
// // panjang = 8, ada kapital, kecil, angka → valid

// validasiPassword("abc123");   
// // panjang < 8 → tidak valid

// ============================
// function sederhana
// ============================

//21.
// // Membuat function dengan 2 parameter: ustadz dan hari
// function jadwalKajian(ustadz, hari) {
//   // Tampilkan kalimat sesuai input
//   console.log("Ngaji bersama " + ustadz + " setiap hari " + hari);
// }

// // Contoh penggunaan function:
// jadwalKajian("Ustadz Ahmad", "Senin");  

// jadwalKajian("Ustadz Budi", "Jumat");  

// // ============================

// //22.


// // Function untuk menghitung luas & keliling lapangan
// function hitungLapangan(panjang, lebar) {
//   // hitung luas (p × l)
//   let luas = panjang * lebar;

//   // hitung keliling (2 × (p + l))
//   let keliling = 2 * (panjang + lebar);

//   // kembalikan hasil sebagai object
//   return {
//     luas: luas,
//     keliling: keliling
//   };
// }

// // Contoh penggunaan function:
// let hasil1 = hitungLapangan(50, 30);
// console.log(hasil1);

// let hasil2 = hitungLapangan(100, 60);
// console.log(hasil2);

// // ============================

// //23.
// // Function konversi Hijriyah ke Masehi
// function konversiHijriyahKeMasehi(tahunHijriyah) {
//   // hitung masehi dengan menambahkan 622
//   let tahunMasehi = tahunHijriyah + 622;

//   // tampilkan hasil
//   console.log("Tahun " + tahunHijriyah + " H = " + tahunMasehi + " M");
// }

// // Contoh penggunaan function:
// konversiHijriyahKeMasehi(1447);  

// konversiHijriyahKeMasehi(1400);  

// ============================

//24.
// // Function untuk menghitung total hafalan
// function hitungTotalHafalan(hafalanHarian) {
//   // pakai reduce untuk menjumlahkan semua elemen array
//   let total = hafalanHarian.reduce((jumlah, ayat) => jumlah + ayat, 0);

//   // kembalikan hasil total
//   return total;
// }

// // Contoh penggunaan:
// let hafalan1 = [2, 3, 4, 5];
// console.log("Total hafalan: " + hitungTotalHafalan(hafalan1));

// let hafalan2 = [1, 2, 2, 3, 4, 5];
// console.log("Total hafalan: " + hitungTotalHafalan(hafalan2));

// ============================

//25.
// // Function untuk membalikkan nama santri
// function balikkanNama(nama) {
//   // ubah string menjadi array karakter
//   let arrayHuruf = nama.split('');

//   // balik urutan array
//   let arrayTerbalik = arrayHuruf.reverse();

//   // gabungkan kembali menjadi string
//   let namaTerbalik = arrayTerbalik.join('');

//   // kembalikan hasil
//   return namaTerbalik;
// }

// // Contoh penggunaan:
// console.log(balikkanNama("ucup"));

// console.log(balikkanNama("xena"));
