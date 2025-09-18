// 

// contoh misalnya pakai async
const ambilData = new Promise((resolve, reject) => {
    setTimeout(() => {
      let sukses = true;
  
      if (sukses) {
        resolve("Data berhasil diambil!");
      } else {
        reject("Gagal ambil data!");
      }
    }, 2000);
  });
  
  ambilData
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("Proses selesai"));




//     Jenis State (keadaan) Promise

// Promise bisa ada di 3 keadaan:

// Pending → masih jalan, belum selesai.
// Fulfilled (Resolved) → berhasil, hasil dikembalikan via resolve.
// Rejected → gagal, error dikembalikan via reject.

// Method utama Promise

// Promise.resolve(value)
// → langsung bikin Promise yang sukses dengan value.
// Promise.reject(reason)
// → langsung bikin Promise yang gagal dengan reason.
// .then()
// → dipanggil kalau Promise berhasil (resolve).
// .catch()
// → dipanggil kalau Promise gagal (reject).
// .finally()
// → dijalankan selalu, entah sukses atau gagal (biasanya buat cleanup).

//  Method static untuk gabung banyak Promise

// Promise.all([ ... ])
// → semua harus sukses, kalau ada 1 gagal → reject.

// Promise.allSettled([ ... ])
// → tunggu semua selesai, hasilnya kasih status fulfilled atau rejected untuk masing-masing.

// Promise.race([ ... ])
// → ambil hasil Promise yang paling cepat selesai (entah sukses/gagal).
 

const surat = fetch("https://api.myquran.com/v2/quran/surat/semua")
const asmaulhusna = fetch ("https://api.myquran.com/v2/husna/semua")
const arbain = fetch ("https://api.myquran.com/v2/hadits/arbain/semua")

// // promise all (kalo satu gagal gagal semua)
// Promise.all([surat, asmaulhusna, arbain])
//  .then(responses => Promise.all(responses.map(r => r.json())))
//  .then(data => {
//     console.log("semua berhasil di ambil")
//     console.dir(data, {depth: null})
//  })
//  .catch(e => {
//     console.log("ada api yang gagal di ambil", e)
//  })

// promise allsetled(nunggu semua selesai baru kasih laporan)
// Promise.allSettled([surat, asmaulhusna, arbain])
//  .then(result => {
//   result.forEach((result, index) => {
//       if(result.status === 'fulfilled') {
//          console.log(API ${index + 1} sukses, result.value)
//       } else {
//          console.log(API ${index + 1} gagal, result.reason)
//       }
//    });
// })

// promise race gunanya untuk mengambil api tercepat
// Promise.race([surat, asmaulhusna, arbain])
//  .then(response => response.json())
//  .then(data => {
//    console.log("api yang paling cepat", data)
//  })
//  .catch(e => {
//    console.log("response gagal", e)
// })


