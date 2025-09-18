//Sistem Nilai Raport Siswa
// client: Mas development saya kan sebagai guru saya lelah mas tulis manual jadi tolong buatkan program sederhana untuk menampilkan nilai nilai siswa

// saya mas development: siaap laksanakan saya proseskan.


let nilai = [80, 75, 90];           // saya rekapkan nilainya
console.log("Nilai awal:", nilai);

nilai.push(85);     // setelah remidi saya tambahkan nilai barunya
console.log("Setelah remedial:", nilai);
let nilaiSalah = nilai.pop(); // saya hapus karena salah memasukkan nilai
console.log("Nilai terakhir dihapus karena salah:", nilaiSalah);      
console.log(nilai);

nilai.unshift(88);      // hasil nilai remidi yang benar saya tambahkan diawal
console.log("Setelah tambah mapel baru:", nilai);

let hapusPertama = nilai.shift();   // salah lagi penambahannya jadi saya hapuskan
console.log("Nilai pertama dihapus:", hapusPertama);
console.log(nilai);

let nilaiEkstra = [95, 85];
let semuaNilai = nilai.concat(nilaiEkstra);   // saya gabungkan dua nilai remidi yang benar
console.log("Gabungan nilai ucup", semuaNilai);

let total = 0;
for (let i = 0; i < semuaNilai.length; i++) {
  total += semuaNilai[i];
} // saya jumlahkan total nilai kahfi
let rata2 = total / semuaNilai.length;    // cari rata ratanya

console.log("====================");
console.log("Total Nilai:", total);
console.log("Rata-rata Nilai:", rata2);

if (rata2 >= 75) {
  console.log("Status: UCUP LULUS");
} else {
  console.log("Status:  TIDAK LULUS");
}

