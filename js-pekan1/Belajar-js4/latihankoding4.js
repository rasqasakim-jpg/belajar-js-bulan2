// ======================================
// soal day 4
// ======================================

// 1.rekap absensi santri harian
// //======================
//  function hitungAbsensi(absensiArr) {
//   // Validasi minimal 1 data, pakai do while
//   let valid = false;
//   do {
//     if (absensiArr.length > 0) {
//       valid = true;
//     } else {
//       console.log("Data absensi minimal 1!");
//       return "Data absensi tidak valid.";
//     }
//   } while (!valid);

//   // Variabel counter
//   let hadir = 0;
//   let alpa = 0;
//   let izin = 0;

//   // Iterasi pakai for
//   for (let i = 0; i < absensiArr.length; i++) {
//     let status = absensiArr[i];

//     // Deteksi jenis absensi pakai if
//     if (status === "Hadir") {
//       hadir++;
//     } else if (status === "Alpa") {
//       alpa++;
//     } else if (status === "Izin") {
//       izin++;
//     }
//   }

//   // Simpan hasil ke object untuk memudahkan forEach
//   let rekap = {
//     Hadir: hadir,
//     Alpa: alpa,
//     Izin: izin
//   };

//   // Print rekap dengan switch di dalam forEach
//   let hasil = [];
//   Object.keys(rekap).forEach((key) => {
//     switch (key) {
//       case "Hadir":
//         hasil.push(Hadir: ${rekap[key]} kali);
//         break;
//       case "Alpa":
//         hasil.push(Alpa: ${rekap[key]} kali);
//         break;
//       case "Izin":
//         hasil.push(Izin: ${rekap[key]} kali);
//         break;
//     }
//   });

//   // Hitung persentase hadir
//   let persenHadir = (hadir / absensiArr.length) * 100;

//   // Return string deskriptif
//   return hasil.join(", ") + . %Hadir: ${persenHadir.toFixed(0)}%.;
// }

// // Contoh penggunaan
// let dataAbsensi = ["Hadir", "Alpa", "Izin", "Hadir", "Hadir"];
// console.log(hitungAbsensi(dataAbsensi));

// 2.laporan santri lulus it fundamental
//======================

// function laporanKelulusan(namaArr, nilaiArr) {
//   // Validasi: jumlah data harus sama & minimal 1
//   let valid = false;
//   do {
//     if (namaArr.length > 0 && namaArr.length === nilaiArr.length) {
//       valid = true;
//     } else {
//       console.log("Data tidak valid! Panjang array tidak sama atau kosong.");
//       return "Data tidak valid.";
//     }
//   } while (!valid);

//   // Array untuk simpan hasil rekap
//   let rekap = [];

//   // Looping dengan for
//   for (let i = 0; i < namaArr.length; i++) {
//     let nama = namaArr[i];
//     let nilai = nilaiArr[i];
//     let status = "";

//     // Penilaian dengan if
//     if (nilai >= 60) {
//       status = "LULUS";
//     } else {
//       status = "TIDAK LULUS";
//     }

//     // Gunakan switch untuk status (meskipun sederhana)
//     switch (status) {
//       case "LULUS":
//         rekap.push({ nama: nama, nilai: nilai, status: status });
//         break;
//       case "TIDAK LULUS":
//         rekap.push({ nama: nama, nilai: nilai, status: status });
//         break;
//     }
//   }

//   // Print dengan forEach + operator ternary
//   let output = [];
//   rekap.forEach((item) => {
//     let teks = ${item.nama}: ${item.status} (nilai ${item.nilai});
//     output.push(teks);
//   });

//   return output.join("\n");
// }

// // Contoh penggunaan
// let nama = ["Ali", "Budi", "Cici"];
// let nilai = [78, 55, 95];
// console.log(laporanKelulusan(nama, nilai));

// 3.analisa hafalan quran mingguan
// //======================

// function analisaHafalan(hafalanArr) {
//   // Validasi input minimal 1 data pakai while
//   let i = 0;
//   while (hafalanArr.length === 0) {
//     console.log("Data hafalan tidak boleh kosong!");
//     return "Data tidak valid.";
//   }

//   // Variabel untuk simpan total hafalan
//   let total = 0;
//   let rekap = [];

//   // Loop for untuk rekap per minggu
//   for (let minggu = 0; minggu < hafalanArr.length; minggu++) {
//     let jumlah = hafalanArr[minggu];
//     total += jumlah;
//     let status = "";

//     // Switch status berdasarkan jumlah
//     switch (true) {
//       case jumlah >= 12:
//         status = "Baik";
//         break;
//       case jumlah >= 10:
//         status = "Cukup";
//         break;
//       default:
//         status = "Perlu Usaha";
//     }

//     rekap.push(Minggu ke-${minggu + 1}: ${jumlah} ayat, status ${status}.);
//   }

//   // Hitung rata-rata
//   let rata = total / hafalanArr.length;

//   // Print dengan forEach
//   let output = [];
//   rekap.forEach((baris) => {
//     output.push(baris);
//   });

//   // Tambahkan info rata-rata
//   output.push(Rata-rata: ${rata.toFixed(1)} ayat.);

//   // Return string gabungan
//   return output.join(" ");
// }

// // Contoh penggunaan
// let data = [10, 8, 14, 15, 12];
// console.log(analisaHafalan(data));

// 4.rekap usia dan generasi santri
//======================

// function rekapUsia(usiaArr) {
//   // Validasi: tidak boleh ada usia negatif (pakai do while)
//   let valid = false;
//   do {
//     let adaNegatif = usiaArr.some((u) => u < 0);
//     if (usiaArr.length === 0 || adaNegatif) {
//       console.log("Data tidak valid! Usia kosong atau ada yang negatif.");
//       return "Data tidak valid.";
//     } else {
//       valid = true;
//     }
//   } while (!valid);

//   // Array untuk simpan hasil rekap
//   let rekap = [];

//   // Loop for
//   for (let i = 0; i < usiaArr.length; i++) {
//     let usia = usiaArr[i];
//     let kategori = "";

//     // Tentukan kategori dengan switch
//     switch (true) {
//       case usia < 13:
//         kategori = "Anak-anak";
//         break;
//       case usia < 20:
//         kategori = "Remaja";
//         break;
//       default:
//         kategori = "Dewasa";
//     }

//     // Simpan hasil
//     rekap.push(Santri ${i + 1}: ${kategori} (${usia} th));
//   }

//   // Gabungkan dengan forEach
//   let output = [];
//   rekap.forEach((baris) => output.push(baris));

//   // Return string hasil
//   return output.join(" ");
// }

// // Contoh penggunaan
// let data = [11, 16, 22];
// console.log(rekapUsia(data));

// 5.daftar santri dan salam digital class
//======================

function daftarSalam(namaArr) {
  // === Validasi tidak boleh ada duplikat nama (pakai while) ===
  let valid = false;
  while (!valid) {
    let adaDuplikat = new Set(namaArr).size !== namaArr.length; 
    // new Set() membuat kumpulan data unik, kalau ukuran beda berarti ada duplikat
    if (adaDuplikat || namaArr.length === 0) {
      console.log("Data tidak valid! Ada duplikat atau kosong.");
      return "Data tidak valid.";
    } else {
      valid = true; // kalau tidak ada duplikat, data valid
    }
  }

  // Array untuk simpan hasil salam
  let salamArr = [];

  // === Gunakan for untuk membuat salam tiap nama ===
  for (let i = 0; i < namaArr.length; i++) {
    let nama = namaArr[i]; // ambil nama santri ke-i
    let salam = "";

    // === if: deteksi nama pendek (< 4 huruf) beri salam unik ===
    if (nama.length < 4) {
      salam = "Halo " + nama; // salam khusus untuk nama pendek
    } else {
      // === switch: variasi salam jika nama mulai huruf 'A' ===
      switch (nama[0]) {
        case "A":
          salam = "Ahlan wa sahlan " + nama; // salam khusus untuk nama A
          break;
        default:
          salam = "Assalamualaikum " + nama; // salam umum
      }
    }

    // Masukkan salam ke array hasil
    salamArr.push(salam);
  }

  // === Print hasil salam dengan forEach ===
  let output = [];
  salamArr.forEach((s) => {
    output.push(s); // kumpulkan semua salam jadi array teks
  });

  // Gabungkan semua salam jadi string baris-baris
  return output.join("\n");
}

// Contoh penggunaan
let data = ["Imam", "Maya", "Rafi"];
console.log(daftarSalam(data));

//======================


// 6. filter nilai santri digital class
// =====================

function filterNilai(santriArr, nilaiSantriArr, batas) {
  // --- 1. Validasi data ---
  let i = 0;
  while (i < santriArr.length) {
    if (santriArr.length !== nilaiSantriArr.length) {
      return "Data tidak valid (jumlah santri dan nilai tidak sama)!";
    }
    if (nilaiSantriArr.some(n => n < 0)) {
      return "Data nilai tidak boleh negatif!";
    }
    i++;
  }

  // --- 2. Cari santri yang nilainya >= batas ---
  let lolos = [];
  for (let j = 0; j < santriArr.length; j++) {
    if (nilaiSantriArr[j] >= batas) {
      lolos.push(santriArr[j]);
    }
  }

  // --- 3. Return hasil akhir ---
  if (lolos.length === 0) {
    return `Tidak ada santri yang nilainya di atas ${batas}.`;
  } else {
    return `${lolos.join(" & ")} mendapatkan nilai di atas ${batas}.`;
  }
}

// --- 4. Contoh penggunaan ---
let santriArr = ["Wahyu","Dina","Umar"];
let nilaiSantriArr = [92,65,88];
console.log(filterNilai(santriArr, nilaiSantriArr, 80));

// // // // ======================================

// // // // 7.rekap kegiatan pembinaan it
// // // // ==================

// // // function rekapKegiatan(kegiatanArr) {
// // //   // Membuat fungsi bernama rekapKegiatan dengan parameter kegiatanArr (berisi array kegiatan)

// // //   // validasi minimal 1 kegiatan dengan do while
// // //   let valid = false;  
// // //   // bikin variabel valid untuk cek apakah input array valid atau tidak (awal = false)

// // //   do {
// // //     if (kegiatanArr.length > 0) {
// // //       valid = true;  
// // //       // kalau panjang array lebih dari 0, artinya ada data → valid = true
// // //     } else {
// // //       console.log("Harus ada minimal 1 kegiatan!");
// // //       // kalau array kosong, tampilkan pesan error
// // //       return "Data kosong";  
// // //       // langsung keluar dari fungsi, return "Data kosong"
// // //     }
// // //   } while (!valid);  
// // //   // do while → cek kondisi minimal 1 kali, kalau belum valid akan mengulang lagi

// // //   // objek untuk simpan jumlah
// // //   let hasil = {
// // //     Coding: 0,
// // //     Ngaji: 0,
// // //     Sholat: 0
// // //   };
// // //   // bikin object hasil, isinya untuk menghitung berapa kali Coding, Ngaji, Sholat

// // //   // hitung jumlah dengan for + switch
// // //   for (let i = 0; i < kegiatanArr.length; i++) {
// // //     // perulangan dari i = 0 sampai panjang array - 1
// // //     switch (kegiatanArr[i]) {
// // //       // switch untuk mengecek isi array pada index ke-i
// // //       case "Coding":
// // //         hasil.Coding++;
// // //         // kalau kegiatan = "Coding", tambahkan jumlah Coding di object hasil
// // //         break;
// // //       case "Ngaji":
// // //         hasil.Ngaji++;
// // //         // kalau kegiatan = "Ngaji", tambahkan jumlah Ngaji
// // //         break;
// // //       case "Sholat":
// // //         hasil.Sholat++;
// // //         // kalau kegiatan = "Sholat", tambahkan jumlah Sholat
// // //         break;
// // //     }
// // //   }

// // //   // buat deskripsi akhir
// // //   let deskripsi = [];  
// // //   // array kosong untuk menampung hasil deskripsi

// // //   Object.entries(hasil).forEach(([kegiatan, jumlah]) => {
// // //     // Object.entries(hasil) → ambil key dan value dari object hasil
// // //     // forEach → perulangan khusus array
// // //     if (jumlah > 0) {
// // //       // kalau jumlah kegiatan lebih dari 0
// // //       deskripsi.push(`${kegiatan} ${jumlah}`);
// // //       // masukkan string "NamaKegiatan Jumlah" ke array deskripsi
// // //     }
// // //   });

// // //   return deskripsi.join(", ");
// // //   // gabungkan semua isi array deskripsi pakai koma → jadi string akhir
// // // }

// // // // Contoh pemanggilan
// // // let input = ["Coding","Ngaji","Coding","Sholat","Ngaji"];
// // // // bikin array kegiatan untuk dites

// // // console.log(rekapKegiatan(input));
// // // // panggil fungsi rekapKegiatan dengan input di atas
// // // // hasilnya: "Coding 2, Ngaji 2, Sholat 1"

// // // // ==================================

// // // // 8.list santri mukim dan online
// // // // ==================

// // // function listSantri(statusArr, namaArr) {
// // //   // --- Validasi minimal 1 Mukim ---
// // //   let i = 0;
// // //   let adaMukim = false;

// // //   while (i < statusArr.length) {
// // //     if (statusArr[i] === "Mukim") {
// // //       adaMukim = true;
// // //       break; // kalau ketemu Mukim, keluar dari loop
// // //     }
// // //     i++;
// // //   }

// // //   if (!adaMukim) {
// // //     console.log("Minimal harus ada 1 santri Mukim!");
// // //     return "Data tidak valid";
// // //   }

// // //   // --- Klasifikasi dengan for paralel + if + switch ---
// // //   let mukim = [];
// // //   let online = [];

// // //   for (let j = 0; j < statusArr.length; j++) {
// // //     let status = statusArr[j];
// // //     let nama = namaArr[j];

// // //     switch (status) {
// // //       case "Mukim":
// // //         mukim.push(nama);
// // //         break;
// // //       case "Online":
// // //         online.push(nama);
// // //         break;
// // //       default:
// // //         console.log("Status tidak dikenal:", status);
// // //     }
// // //   }

// // //   // --- Buat deskripsi dengan forEach ---
// // //   let hasil = [];

// // //   [ ["Santri Mukim", mukim], ["Santri Online", online] ].forEach(([label, arr]) => {
// // //     if (arr.length > 0) {
// // //       hasil.push(`${label}: ${arr.join(", ")}`);
// // //     }
// // //   });

// // //   // --- Return kalimat ---
// // //   return hasil.join(" | ");
// // // }

// // // // Contoh pemanggilan
// // // let status = ["Mukim","Online","Mukim"];
// // // let nama = ["Rini","Ari","Yusuf"];

// // // console.log(listSantri(status, nama));
// // // // Output: "Santri Mukim: Rini, Yusuf | Santri Online: Ari"

// // // // ==================================

// // // // 9.Nilai Tertinggi Ujian Tahfidz/IT
// // // // ==================

// // // function nilaiTertinggi(namaArr, nilaiArr) {
// // //   // --- Validasi dengan while ---
// // //   let i = 0;
// // //   while (i < 1) {  // cek sekali
// // //     if (namaArr.length === 0 || nilaiArr.length === 0) {
// // //       console.log("Data tidak boleh kosong!");
// // //       return "Data tidak valid";
// // //     }
// // //     if (namaArr.length !== nilaiArr.length) {
// // //       console.log("Jumlah nama dan nilai harus sama!");
// // //       return "Data tidak valid";
// // //     }
// // //     i++; // biar keluar dari while
// // //   }

// // //   // --- Cari nilai maksimum dengan for ---
// // //   let maxNilai = nilaiArr[0];
// // //   let maxNama = namaArr[0];

// // //   for (let j = 1; j < nilaiArr.length; j++) {
// // //     if (nilaiArr[j] > maxNilai) {
// // //       maxNilai = nilaiArr[j];
// // //       maxNama = namaArr[j];
// // //     }
// // //   }

// // //   // --- Tambahkan simbol untuk nilai sempurna ---
// // //   let simbol = "";
// // //   switch (maxNilai) {
// // //     case 100:
// // //       simbol = " *"; // kasih tanda bintang
// // //       break;
// // //     default:
// // //       simbol = "";
// // //   }

// // //   // --- Print semua santri dengan forEach (opsional) ---
// // //   namaArr.forEach((nama, idx) => {
// // //     let nilaiSantri = nilaiArr[idx];
// // //     console.log(`${nama}: ${nilaiSantri}`);
// // //   });

// // //   // --- Return hasil akhir ---
// // //   return `Nilai tertinggi ${maxNama}: ${maxNilai}${simbol}`;
// // // }

// // // // Contoh pemanggilan
// // // let nama = ["Ana","Udin","Kiki"];
// // // let nilai = [77,95,80];

// // // console.log(nilaiTertinggi(nama, nilai));
// // // // Output: "Nilai tertinggi Udin: 95"

// // // // ======================

// // // // 10. Filter NIS Santri Valid
// // // // ======================

// // function filterNIS(nisArr) {
// //   // --- Validasi dengan do while ---
// //   let valid = false;
// //   do {
// //     if (nisArr.length > 0) {
// //       valid = true;
// //     } else {
// //       console.log("Harus ada minimal 1 NIS!");
// //       return "Data kosong";
// //     }
// //   } while (!valid);

// //   // --- Array untuk klasifikasi ---
// //   let validNIS = [];
// //   let invalidNIS = [];

// //   // --- Periksa tiap data dengan for ---
// //   for (let i = 0; i < nisArr.length; i++) {
// //     let nis = nisArr[i];

// //     if (nis.length === 6) {
// //       // switch untuk variasi klasifikasi
// //       switch (true) {
// //         case (nis.length === 6):
// //           validNIS.push(nis);
// //           break;
// //       }
// //     } else {
// //       invalidNIS.push(nis);
// //     }
// //   }

// //   // --- Susun output dengan forEach ---
// //   let hasil = [];
// //   [
// //     ["NIS valid", validNIS],
// //     ["NIS invalid", invalidNIS]
// //   ].forEach(([label, arr]) => {
// //     if (arr.length > 0) {
// //       hasil.push(`${label}: ${arr.join(", ")}`);
// //     }
// //   });

// //   // --- Return string hasil ---
// //   return hasil.join("; ");
// // }

// // // Contoh pemanggilan
// // let nisArr = ["123456","765432","1234"];
// // console.log(filterNIS(nisArr));
// // // Output: "NIS valid: 123456, 765432; NIS invalid: 1234"

// // // ==================

// // // 11. Akumulasi Partisipasi Kegiatan Mingguan
// // // ==================

// // function totalKegiatan(partArr) {
// //   // --- Validasi dengan do while ---
// //   let valid = false;
// //   do {
// //     if (partArr.length > 0) {
// //       valid = true;
// //     } else {
// //       console.log("Data kegiatan tidak boleh kosong!");
// //       return "Data tidak valid";
// //     }
// //   } while (!valid);

// //   // --- Inisialisasi variabel ---
// //   let total = 0;
// //   let max = partArr[0];
// //   let min = partArr[0];

// //   // --- Penjumlahan + cari min & max ---
// //   for (let i = 0; i < partArr.length; i++) {
// //     let nilai = partArr[i];
// //     total += nilai; // akumulasi

// //     // cari max dengan if
// //     if (nilai > max) {
// //       max = nilai;
// //     }

// //     // cari min pakai switch
// //     switch (true) {
// //       case (nilai < min):
// //         min = nilai;
// //         break;
// //     }
// //   }

// //   // --- Hitung rata-rata ---
// //   let rata = total / partArr.length;

// //   // --- Cetak detail harian dengan forEach ---
// //   console.log("Partisipasi harian:");
// //   partArr.forEach((val, idx) => {
// //     console.log(`Hari ke-${idx+1}: ${val} kali`);
// //   });

// //   // --- Return hasil ---
// //   return `Total partisipasi: ${total} kali, rata-rata ${rata}/hari, max ${max}, min ${min}`;
// // }

// // // Contoh pemanggilan
// // let partArr = [2,3,4,1];
// // console.log(totalKegiatan(partArr));
// // // Output: "Total partisipasi: 10 kali, rata-rata 2.5/hari, max 4, min 1"

// // // ==================================

// // 12. Statistik Jam Belajar IT/Madrasah
// // // ==================

// function statJam(jamArr) {
//   // --- Validasi dengan do while ---
//   let valid = false;
//   do {
//     if (jamArr.length > 0) {
//       valid = true;
//     } else {
//       console.log("Data jam belajar tidak boleh kosong!");
//       return "Data tidak valid";
//     }
//   } while (!valid);

//   // --- Inisialisasi variabel ---
//   let total = 0;
//   let max = jamArr[0];
//   let min = jamArr[0];

//   // --- Hitung total, cari min dan max ---
//   for (let i = 0; i < jamArr.length; i++) {
//     let jam = jamArr[i];
//     total += jam;

//     if (jam > max) {
//       max = jam;
//     }
//     if (jam < min) {
//       min = jam;
//     }
//   }

//   // --- Hitung rata-rata ---
//   let rata = total / jamArr.length;

//   // --- Cetak detail dengan forEach ---
//   console.log("Detail jam belajar:");
//   jamArr.forEach((val, idx) => {
//     console.log(`Hari ke-${idx+1}: ${val} jam`);
//   });

//   // --- Return hasil ---
//   return `Jam belajar terbanyak ${max}, tersedikit ${min}, rata-rata ${rata}`;
// }

// // Contoh pemanggilan
// let jamArr = [3,6,2,5];
// console.log(statJam(jamArr));
// // Output: "Jam belajar terbanyak 6, tersedikit 2, rata-rata 4"

// // // ==================================

// // 13. Selisih Hafalan Quran Mingguan

// function selisihHafalan(hafalanArr) {
//   // --- Validasi dengan do while ---
//   let valid = false;
//   do {
//     if (hafalanArr.length > 1) { 
//       // butuh minimal 2 minggu untuk ada selisih
//       valid = true;
//     } else {
//       console.log("Data hafalan minimal 2 minggu!");
//       return "Data tidak valid";
//     }
//   } while (!valid);

//   // --- Array untuk menampung hasil selisih ---
//   let hasil = [];

//   // --- Loop for untuk hitung selisih antar minggu ---
//   for (let i = 0; i < hafalanArr.length - 1; i++) {
//     let selisih = hafalanArr[i+1] - hafalanArr[i];
//     let deskripsi = "";

//     // --- Gunakan switch untuk klasifikasi naik/turun/sama ---
//     switch (true) {
//       case (selisih > 0):
//         deskripsi = `Minggu ${i+1}-${i+2}: naik ${selisih} ayat`;
//         break;
//       case (selisih < 0):
//         deskripsi = `Minggu ${i+1}-${i+2}: turun ${Math.abs(selisih)} ayat`;
//         break;
//       default:
//         deskripsi = `Minggu ${i+1}-${i+2}: tetap`;
//     }

//     hasil.push(deskripsi);
//   }

//   // --- Cetak detail dengan forEach (opsional ke console) ---
//   console.log("Detail selisih hafalan:");
//   hasil.forEach(item => console.log(item));

//   // --- Return hasil akhir ---
//   return hasil.join(", ");
// }

// // Contoh pemanggilan
// let hafalan = [5,10,15,12];
// console.log(selisihHafalan(hafalan));
// // Output: "Minggu 1-2: naik 5 ayat, 2-3: naik 5 ayat, 3-4: turun 3 ayat"

// // // ==================================

// // 14. Format Guru Berdasarkan Gender
// // // ==================

// function formatGuru(namaArr, genderArr) {
//   // --- Validasi dengan while ---
//   let i = 0;
//   while (i < 1) {
//     if (namaArr.length === 0 || genderArr.length === 0) {
//       console.log("Data nama/gender tidak boleh kosong!");
//       return "Data tidak valid";
//     }
//     if (namaArr.length !== genderArr.length) {
//       console.log("Jumlah nama dan gender harus sama!");
//       return "Data tidak valid";
//     }
//     i++; // supaya keluar dari while
//   }

//   // --- Array hasil ---
//   let hasil = [];

//   // --- For loop paralel ---
//   for (let j = 0; j < namaArr.length; j++) {
//     let nama = namaArr[j];
//     let gender = genderArr[j];
//     let prefix = "";

//     // --- Switch berdasarkan gender ---
//     switch (gender) {
//       case "L":
//         prefix = "Ustadz";
//         break;
//       case "P":
//         prefix = "Ustadzah";
//         break;
//       default:
//         prefix = "Guru";
//     }

//     hasil.push(`${prefix} ${nama}`);
//   }

//   // --- Cetak detail dengan forEach ---
//   console.log("Daftar Guru:");
//   hasil.forEach(item => console.log(item));

//   // --- Return hasil ---
//   return hasil.join("; ");
// }

// // Contoh pemanggilan
// let nama = ["Ahmad","Fatimah"];
// let gender = ["L","P"];

// console.log(formatGuru(nama, gender));
// // Output: "Ustadz Ahmad; Ustadzah Fatimah"

// // // ==================================

// // 15. Rekap Santri Tamat Qur’an
// // // ==================

// function rekapTamat(khatamArr) {
//   // --- Validasi dengan do while ---
//   let valid = false;
//   do {
//     if (khatamArr.length > 0) {
//       valid = true;
//     } else {
//       console.log("Data khatam tidak boleh kosong!");
//       return "Data tidak valid";
//     }
//   } while (!valid);

//   // --- Hitung santri yang tamat 30 juz ---
//   let jumlah = 0;

//   khatamArr.forEach(juz => {
//     if (juz === 30) {
//       switch (true) {
//         case (juz === 30):
//           jumlah++;
//           break;
//       }
//     }
//   });

//   // --- Return hasil ---
//   return `${jumlah} santri telah khatam 30 juz`;
// }

// // Contoh pemanggilan
// let data = [28,30,35,30,29];
// console.log(rekapTamat(data));
// // Output: "3 santri telah khatam 30 juz"

// // // ==================================

// // 16. Status Nilai Ujian IT/Madrasah
// // // ==================

// function statusNilai(nilaiArr) {
//   // --- Validasi minimal 1 data dengan do while ---
//   let valid = false;
//   do {
//     if (nilaiArr.length > 0) {
//       valid = true;
//     } else {
//       console.log("Data nilai tidak boleh kosong!");
//       return "Data tidak valid";
//     }
//   } while (!valid);

//   // --- Array untuk tampung hasil ---
//   let hasil = [];

//   // --- Loop for untuk cek status nilai ---
//   for (let i = 0; i < nilaiArr.length; i++) {
//     let nilai = nilaiArr[i];
//     let status = "";

//     // --- Gunakan if + switch untuk klasifikasi ---
//     if (nilai >= 80) {
//       switch (true) {
//         case (nilai >= 80):
//           status = "Baik";
//           break;
//       }
//     } else if (nilai >= 60) {
//       switch (true) {
//         case (nilai >= 60 && nilai < 80):
//           status = "Cukup";
//           break;
//       }
//     } else {
//       switch (true) {
//         case (nilai < 60):
//           status = "Kurang";
//           break;
//       }
//     }

//     hasil.push(`${nilai}: ${status}`);
//   }

//   // --- Susun output dengan forEach ---
//   let output = [];
//   hasil.forEach(item => {
//     output.push(item);
//   });

//   // --- Return string hasil ---
//   return output.join(", ");
// }

// // Contoh pemanggilan
// let nilaiArr = [80,60,75,55];
// console.log(statusNilai(nilaiArr));
// // Output: "80: Baik, 60: Cukup, 75: Cukup, 55: Kurang"

// // // ==================================

// // 17. Hari Izin/Sakit Mingguan
// // // ===============

// function hariIzinSakit(statusArr) {
//   // --- Validasi dengan while ---
//   let i = 0;
//   while (i < 1) {
//     if (statusArr.length === 0) {
//       console.log("Data status tidak boleh kosong!");
//       return "Data tidak valid";
//     }
//     i++; // biar keluar dari while
//   }

//   // --- Array untuk tampung hari izin/sakit ---
//   let hari = [];

//   // --- Loop dengan for ---
//   for (let j = 0; j < statusArr.length; j++) {
//     let status = statusArr[j];

//     if (status === "Izin" || status === "Sakit") {
//       // --- Gunakan switch ---
//       switch (status) {
//         case "Izin":
//         case "Sakit":
//           hari.push(j+1); // +1 karena hari dimulai dari 1
//           break;
//       }
//     }
//   }

//   // --- Return hasil ---
//   if (hari.length === 0) {
//     return "Tidak ada santri izin/sakit minggu ini";
//   }

//   return `Santri izin/sakit pada hari ke-${hari.join(",")}`;
// }

// // Contoh pemanggilan
// let status = ["Hadir","Izin","Sakit","Hadir","Izin"];
// console.log(hariIzinSakit(status));
// // Output: "Santri izin/sakit pada hari ke-2,3,5"

// // // ==================================

// // 18.validasi nis
// // =================

// function validasiNIS(nisArr) {
//   // --- Validasi dengan do while ---
//   let valid = false;
//   do {
//     if (nisArr.length > 0) {
//       valid = true;
//     } else {
//       console.log("Data NIS tidak boleh kosong!");
//       return "Data tidak valid";
//     }
//   } while (!valid);

//   // --- Array untuk menampung valid & invalid ---
//   let nisValid = [];
//   let nisInvalid = [];

//   // --- Loop for untuk cek tiap NIS ---
//   for (let i = 0; i < nisArr.length; i++) {
//     let nis = nisArr[i];

//     if (nis.length === 6) {
//       switch (true) {
//         case (nis.length === 6):
//           nisValid.push(nis);
//           break;
//       }
//     } else {
//       switch (true) {
//         case (nis.length !== 6):
//           nisInvalid.push(nis);
//           break;
//       }
//     }
//   }

//   // --- Susun hasil ---
//   let hasil = `NIS valid: ${nisValid.join(", ")}`;
//   if (nisInvalid.length > 0) {
//     hasil += `; NIS invalid: ${nisInvalid.join(", ")}`;
//   }

//   // --- Return hasil akhir ---
//   return hasil;
// }

// // Contoh pemanggilan
// let nisArr = ["123456","654321","54321"];
// console.log(validasiNIS(nisArr));
// // Output: "NIS valid: 123456, 654321; NIS invalid: 54321"

// // // ==================

// // 19. Kelompokkan Kegiatan Harian
// // =====================

// function kelompokKegiatan(arrKegiatan) {
//   // --- Validasi minimal ada 1 kegiatan ---
//   if (arrKegiatan.length === 0) {
//     return "Data kegiatan kosong!";
//   }

//   // --- Object untuk rekap kegiatan ---
//   let rekap = {};

//   // --- Loop dengan for ---
//   for (let i = 0; i < arrKegiatan.length; i++) {
//     let kegiatan = arrKegiatan[i];

//     // switch untuk klasifikasi
//     switch (kegiatan) {
//       case "Ngaji":
//       case "Sholat":
//       case "Olahraga":
//       case "Coding":
//         if (rekap[kegiatan]) {
//           rekap[kegiatan] += 1; // tambah hitungan
//         } else {
//           rekap[kegiatan] = 1; // pertama kali muncul
//         }
//         break;
//       default:
//         console.log(`Kegiatan ${kegiatan} tidak dikenali`);
//     }
//   }

//   // --- Susun hasil dengan forEach ---
//   let hasil = [];
//   Object.keys(rekap).forEach(kegiatan => {
//     hasil.push(`${kegiatan}: ${rekap[kegiatan]} kali`);
//   });

//   // --- Return string akhir ---
//   return hasil.join("; ");
// }

// // Contoh pemanggilan
// let kegiatan = ["Sholat","Ngaji","Olahraga","Coding","Ngaji"];
// console.log(kelompokKegiatan(kegiatan));
// // Output: "Ngaji: 2 kali; Sholat: 1 kali; Olahraga: 1 kali; Coding: 1 kali"

// // // ==================================

// // 20. Angka Paling Sering Muncul pada Ujian
// // ==================

// function angkaSeringMuncul(angkaArr) {
//   // --- Validasi ---
//   if (angkaArr.length === 0) {
//     return "Data angka kosong!";
//   }

//   // --- Objek untuk simpan frekuensi ---
//   let frekuensi = {};

//   // --- Hitung frekuensi dengan forEach ---
//   angkaArr.forEach(angka => {
//     if (frekuensi[angka]) {
//       frekuensi[angka] += 1;
//     } else {
//       frekuensi[angka] = 1;
//     }
//   });

//   // --- Cari max frekuensi ---
//   let angkaMax = null;
//   let maxFreq = 0;

//   for (let angka in frekuensi) {
//     if (frekuensi[angka] > maxFreq) {
//       angkaMax = angka;
//       maxFreq = frekuensi[angka];
//     } else if (frekuensi[angka] === maxFreq) {
//       // --- Gunakan switch jika ada angka lain dengan frekuensi sama ---
//       switch (true) {
//         case (parseInt(angka) < parseInt(angkaMax)):
//           angkaMax = angka; // pilih angka lebih kecil kalau sama
//           break;
//       }
//     }
//   }

//   // --- Return hasil ---
//   return `Angka ${angkaMax} muncul paling sering, sebanyak ${maxFreq} kali`;
// }

// // Contoh pemanggilan
// let arr = [1,2,2,3,1,2];
// console.log(angkaSeringMuncul(arr));
// // Output: "Angka 2 muncul paling sering, sebanyak 3 kali"

// // // ==================================
