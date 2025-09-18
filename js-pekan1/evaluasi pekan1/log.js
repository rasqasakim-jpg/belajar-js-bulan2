// soal 1 ===========================
// const hargaGudeg = 8000;
// const hargaAyamgoreng = 12000
// const hargaEsteh = 3000

// let jualGudeg = 15
// let jualAyamgoreng = 10
// let jualEsteh = 20

// let totalGudeg = hargaGudeg * jualGudeg
// let totalAyamgoreng = hargaAyamgoreng * jualAyamgoreng
// let totalEsteh = hargaEsteh * jualEsteh

// totalPendapatan = totalGudeg + totalAyamgoreng + totalEsteh

// console.log("Total pendapatan hari ini")
// console.log("Nasi gudeg (" + jualGudeg + "porsi) = Rp." + totalGudeg)
// console.log("Ayam goreng (" + jualAyamgoreng + "porsi) = Rp." + totalAyamgoreng);
// console.log("Es teh (" + jualEsteh + "porsi) = Rp." + totalEsteh);
// console.log("=============================================");

// console.log("Total pendapatan hari ini = Rp." + totalPendapatan);

// ==============================================
// soal 2

// const hargaGudeg = 8000;
// const hargaAyamgoreng = 12000
// const hargaEsteh = 3000

// let jualGudeg = 15
// let jualAyamgoreng = 10
// let jualEsteh = 20

// let totalGudeg = hargaGudeg * jualGudeg
// let totalAyamgoreng = hargaAyamgoreng * jualAyamgoreng
// let totalEsteh = hargaEsteh * jualEsteh

// totalPendapatan = totalGudeg + totalAyamgoreng + totalEsteh

// console.log("Total pendapatan hari ini")
// console.log("Nasi gudeg (" + jualGudeg + "porsi) = Rp." + totalGudeg)
// console.log("Ayam goreng (" + jualAyamgoreng + "porsi) = Rp." + totalAyamgoreng);
// console.log("Es teh (" + jualEsteh + "porsi) = Rp." + totalEsteh);
// console.log("=============================================");

// console.log("Total pendapatan hari ini = Rp." + totalPendapatan);

// if (totalPendapatan > 50000) {
//     let diskon = totalPendapatan * 0.1
//     let totalBayar = totalPendapatan - diskon
//     console.log("diskon 10% Rp " + diskon);
//     console.log("total setelah diskon Rp " + totalBayar);
//  } else {
//     console.log("total bayar Rp " + totalPendapatan);
//  } 

// ===============================================
// soal 3

// let jualGudeg = 15;
// let jualAyamgoreng = 10;
// let jualEsteh = 20;

// if (jualGudeg > jualAyamgoreng && jualGudeg > jualEsteh) {
//     console.log("terlaris" + jualGudeg)
// }else if (jualAyamgoreng > jualGudeg && jualAyamgoreng > jualEsteh) {
//     console.log("terlaris" + jualAyamgoreng)
// }else if (jualEsteh > jualGudeg && jualEsteh > jualAyamgoreng) {
//     console.log("terlaris esteh dengan jumlah " + jualEsteh)
// }else{
//     console.log("ada satu menu terlaris");
// }

// =================================================
// soal 4

// const hargaGudeg = 8000;
// const hargaAyamgoreng = 12000
// const hargaEsteh = 3000

// let jualGudeg = 15
// let jualAyamgoreng = 10
// let jualEsteh = 20

// let totalGudeg = hargaGudeg * jualGudeg
// let totalAyamgoreng = hargaAyamgoreng * jualAyamgoreng
// let totalEsteh = hargaEsteh * jualEsteh

// totalPendapatan = totalGudeg + totalAyamgoreng + totalEsteh

// let biasa = 0.05;
// let member = 0.1;
// let vip = 0.15;

// console.log("pelanggan biasa (diskon 5%): " + totalPendapatan * biasa);
// console.log("pelanggan member (diskon 10%): " + totalPendapatan * member);
// console.log("pelanggan vip (diskon 15%): " + totalPendapatan * vip);

// ==================================================
// soal 5

// let penjualan = [150000,200000,175000,180000,165000,195000,145000];
// let total = 0;

// for (let i = 0; i < penjualan.length; i++) {
//     total += penjualan[i];
// }

// let rataRata = total / penjualan.length;

// console.log("rata rata penjualan penjualan minggu terakhir " , rataRata);

// ==================================================
// soal 6

// let barang = [
//     {nama: "kaos", stok: 50, harga: 75000 },
//     {nama: "celana", stok: 30, harga: 150000 },
//     {nama: "jaket", stok: 15, harga: 200000 },
// ]

// for (let i = 0; i < barang.length; i++) {
//   console.log("Nama:", barang[i].nama, 
//               "Stok:", barang[i].stok, 
//               "Harga:", barang[i].harga);
// }

// ==================================================
// soal 7

// let pelanggan = {
//     "ucup": 0,
//     "kahfi": 0,
//     "xena": 0
// }

// function tambahPoin(nama, belanja) {
//     if (pelanggan[nama] !== undefined) {
//         let poin = belanja / 10000;
//         pelanggan[nama] += poin;
//         console.log(`${nama} dapat ${poin} poin`);
//     }else {
//         console.log("nama tidak ditemukan");
//     }
// }

// tambahPoin("ucup", 20000);
// tambahPoin("kahfi", 10000);
// tambahPoin("xena", 30000);

// =====================================
// soal 8

// let barang = [
//   { produk: "Kaos", stok: 40, harga: 75000 },
//   { produk: "Celana", stok: 8, harga: 150000 },
//   { produk: "Jaket", stok: 5, harga: 200000 }
// ];

// barang.forEach(item =>  {
//   let bonus = 0
//   if (item.stok <= 10) {
//     bonus = item.harga * 0.05
//     console.log("dapat bonus" + " " + bonus);
    
//   } else (item.stok > 10)
//   console.log("tidak dapat bonus" + " " + item.produk)
// });

// =================================
// soal 9

// let barang = {
//   "Kaos": { stok: 50, harga: 75000 },
//   "Celana": { stok: 18, harga: 150000 },
//   "Jaket": { stok: 5, harga: 200000 }
// };

// function cekStok() {
//     // in itu untuk mengambil semua object itu
//   for (let nama in barang) {
//     let item = barang[nama];
//     if (item.stok < 20) {
//       console.warn(` Peringatan: stok ${nama} sisa ${item.stok}`);
//     } else {
//       console.log(` ${nama} stok aman pol (${item.stok})`);
//     }
//   }
// }

// cekStok();

// ==================================
// soal 10

// let pelanggan = {
//   "ucup": 80,
//   "kahfi": 120,
//   "xena": 600,
// };

// function cekLevel() {
//   for (let nama in pelanggan) {
//     let poin = pelanggan[nama];
//     let level = "";

//     if (poin >= 500) {
//       level = "Gold";
//     } else if (poin >= 100) {
//       level = "Silver";
//     } else {
//       level = "Bronze";
//     }

//     console.log(`${nama} punya ${poin} poin Level: ${level}`);
//   }
// }

// cekLevel();

// ==================================
// soal 11

// let nilai = [
//   80,70,98,67,88,
//   78,66,83,88,95,
//   60,75,90,94,85,
//   78,91,92,81,71,
//   61,77,87,93,82,
// ];

// let total = 0;
// for (let i = 0; i < nilai.length; i++) {
//     total += nilai[i];
// }
// let rataRata = total / nilai.length;

// console.log("rata-rata nilai sekelas: ", rataRata);

// ==================================
// soal 12

// let nilaiSiswa = {
//     "ucup": 80,
//     "kahfi": 90,
//     "xena": 60,
//     "thoriq": 70,    
// }
// for (let nama in nilaiSiswa) {
//     let nilai = nilaiSiswa[nama];{
//         let grade = "";

//         if (nilai >= 85) {
//             grade = "A";
//         } else if (nilai >= 70) {
//             grade = "B";
//         } else if (nilai >= 60) {
//             grade = "C";
//         } else {
//             grade = "D";
//         }
//         console.log(`nilainya ${nama} adalah ${grade}`);
//     }
// }

// ==================================
// soal 13

// let siswa = [
//     { nama: "ucup", nilai: 80 },
//     { nama: "kahfi", nilai: 90 },
//     { nama: "xena", nilai: 60 },
//     { nama: "thoriq", nilai: 70 }
// ]

// function cariSiswa(nama) {
//     for (let i = 0; i < siswa.length; i++){
//         if (siswa[i].nama === nama) {
//             console.log(`${siswa[i].nama} nilainya ${siswa[i].nilai}`);
//             return;
        
//         }
//     };
            
// } 
// cariSiswa("ucup");
// cariSiswa("kahfi");
// cariSiswa("xena");
// cariSiswa("thoriq");

// ==================================
// soal 14

// let nilai = [
//   80,70,98,67,88,
//   78,66,83,88,95,
//   60,75,90,94,85,
//   78,91,92,81,71,
//   61,77,87,93,82,
// ];

// let total = 0;
// for (let i = 0; i < nilai.length; i++) {
//     total += nilai[i];
// }
// let rataRata = total / nilai.length;

// if (rataRata >= 80) {
//     console.log(`rata rata kelas ${rataRata} berhak mendapatkan reward`);
// } else {
//     console.log(`rata rata kelas ${rataRata} tidak berhak mendapatkan reward`);
// }

// ==================================
// soal 15

// let siswa = [
//   { nama: "ucup", nilai: 80 },
//   { nama: "kahfi", nilai: 90 },
//   { nama: "xena", nilai: 60 },
//   { nama: "thoriq", nilai: 70 }
// ]

// siswa.sort((a, b) => b.nilai - a.nilai);

// for (let i = 1; i < siswa.length; i++) {
//     console.log(`${i} ${siswa[i].nama} : ${siswa[i].nilai}`)
// }

// ==================================
// soal 16

// let layanan = {
//     ringan: {harga: 50000, waktu: 2},
//     sedang: {harga: 100000, waktu: 4},
//     berat: {harga: 200000, waktu: 8}
// };

// let motorMasuk = {
//     ringan: 3,
//     sedang: 4,
//     berat: 2
// };

// let totalPendapatan = 0;
// let totalWaktu = 0;

// for (let jenis in layanan) {
//     let jumlah = motorMasuk[jenis];
//     totalPendapatan += layanan[jenis].harga;
//     totalWaktu += layanan[jenis].waktu;
// }
// console.log(`total pendapatan: ${totalPendapatan}`);
// console.log(`total waktu: ${totalWaktu} jam`);

// ==================================
// soal 17

// let layanan = {
//     ringan: {harga: 50000, waktu: 2},
//     sedang: {harga: 100000, waktu: 4},
//     berat: {harga: 200000, waktu: 8}
// };

// let motorMasuk = {
//     ringan: 5,
//     sedang: 2,
//     berat: 0
// };

// let jamBuka = 8;

// let totalWaktu = 0;

// for (let jenis in layanan) {
//     totalWaktu += motorMasuk[jenis] * layanan[jenis].waktu; 
// }

// if (jamBuka <= totalWaktu) {
//     console.log(`semua motor sudah selesai hari ini ${totalWaktu} jam`);
// } else {
//     console.log(`semua motor belum selesai hari ini ${totalWaktu} jam`);
// }

// ==================================
// soal 18

// let antrian = []

// antrian.push("motor beat")
// antrian.push("motor mio")
// antrian.push("motor vario")

// console.log("Daftar antrian saat ini:");
// for (let i = 0; i < antrian.length; i++) {
//     console.log(`${i + 1}. ${antrian[i]}`);
// }

// console.log(`Motor yang datang duluan adalah ${antrian[0]}, yang kedua adalah ${antrian[1]}, dan yang ketiga adalah ${antrian[2]}.`);

// ==================
// soal 19

// let garansi = {
//   ringan: 7,    
//   sedang: 14,   
//   berat: 30     
// };

// function tanggalGaransi(jenisService, tanggalService) {
//   let durasi = garansi[jenisService];
//   let tglService = new Date(tanggalService); 
//   tglService.setDate(tglService.getDate() + durasi); 
//   console.log(`Service ${jenisService} pada ${tanggalService} → Garansi berakhir: ${tglService.toLocaleDateString()}`);
// }

// tanggalGaransi("ringan", "2025-09-08");
// tanggalGaransi("sedang", "2025-09-08");
// tanggalGaransi("berat", "2025-09-08");

// ==================================
// soal 20

// let layanan = { ringan: 50000, sedang: 100000, berat: 200000 };

// let komisi = { ringan: 0.1, sedang: 0.15, berat: 0.2 };

// let motorMasuk = { ringan: 3, sedang: 2, berat: 1 };

// let totalKomisi = 0;
// for (let jenis in motorMasuk) {
//   totalKomisi += motorMasuk[jenis] * layanan[jenis] * komisi[jenis];
// }

// console.log(`Total komisi mekanik hari ini: Rp${totalKomisi}`);

// ===================================
// soal 21

// let paket = {
//   Basic: { harga: 500000, pertemuan: 4 },
//   Standard: { harga: 800000, pertemuan: 8 },
//   Premium: { harga: 1200000, pertemuan: 12 }
// };

// for (let nama in paket) {
//   let biaya = paket[nama].harga / paket[nama].pertemuan;
//   console.log(`${nama}: Rp${biaya} per pertemuan`);
// }

// // ==================================
// // soal 22

// // Data paket kursus
// let paket = {
//   Basic: { harga: 500000, cicilan: 2 },
//   Standard: { harga: 800000, cicilan: 3 },
//   Premium: { harga: 1200000, cicilan: 4 }
// };

// // Function untuk hitung cicilan
// function hitungCicilan(namaPaket, cicilanSudahDibayar) {
//   let data = paket[namaPaket];
//   let cicilanPerKali = data.harga / data.cicilan;
//   let sisa = data.harga - (cicilanPerKali * cicilanSudahDibayar);
//   console.log(`${namaPaket} → Cicilan per kali: Rp${cicilanPerKali}, Sudah dibayar: ${cicilanSudahDibayar} kali, Sisa: Rp${sisa}`);
// }

// // Contoh penggunaan
// hitungCicilan("Basic", 1);
// hitungCicilan("Standard", 2);
// hitungCicilan("Premium", 3);

