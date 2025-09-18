// soal 1. kelola nilai mahasiswa
 const mahasiswa = {  
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};

const dataTambahan = { 
  david: { math: 88, english: 91, science: 85 } 
};
// 1.
const namaMahasiswa = Object.keys(mahasiswa);     
console.log(`nama mahasiswa: ${namaMahasiswa}`);
// 2/
const hasil = Object.entries(mahasiswa).map(([nama, nilai]) => {        
  const values = Object.values(nilai); // ambil nilai mapel 
  const rata = values.reduce((a, b) => a + b, 0) / values.length; 
  return `${nama} rata-rata: ${rata.toFixed(2)}`;
}).join(", ");
console.log(hasil);
// 3.
for (const [nama, { math, english, science }] of Object.entries(mahasiswa)) {      
    console.log(`${nama} math = ${math}, english = ${english}, science = ${science}`);
}
// 4
const gabungan = { ...mahasiswa, ...dataTambahan };     
console.log(" Object gabungan dengan 4 mahasiswa: \n", gabungan);

// soal 2 sistem playlist murottal
// data yang diberikan:
const playlist = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
];

// 1.
const juz1 = playlist.filter(({juz}) => juz === 1);
console.log(juz1);

// 2.
const durasi = playlist.reduce((a, b) => a + b.durasi, 0);
console.log(`total: ${durasi} detik (${(durasi / 60).toFixed(1)} menit) atau (${(durasi / 3600).toFixed(2)} jam)`);

// 3.
const listSuratQari = playlist.map(({judul, qari}) => ({judul, qari}));
console.log(listSuratQari)

// 4.
const terpanjang = playlist.reduce((a, b) => a.durasi > b.durasi ? a : b);
console.log(`${terpanjang.judul} (${terpanjang.durasi} detik atau ${(terpanjang.durasi / 60).toFixed(0)} menit)`)

// 5.
const murottalBaru = { judul: "al kahfi", qari: "Abu thoriq aj jahal", durasi: 900, juz: 23 };
const playlistBaru = [murottalBaru, ...playlist];
console.table(playlistBaru);

// soal 3 pengeluaran mingguan
// data yang diberikan:
const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];

// 1.
const total = pengeluaran.reduce((a, b) => a + b.jumlah, 0);
console.log(`total pengeluaran: Rp${total}`)

// 2.
const kategori = pengeluaran.reduce((a, b) => {
    a[b.kategori] = (a[b.kategori] || 0) + b.jumlah;
    return a;
}, {});
console.log(kategori);

// 3.
const hari = pengeluaran.reduce((a, b) => {
    a[b.hari] = (a[b.hari] || 0) + b.jumlah;
    return a;
}, {});
console.log(hari);

// 4.
const terbesar = pengeluaran.reduce((a, b) => a.jumlah > b.jumlah ? a : b);
console.log(terbesar);


// 5.
const tigaPengeluaran = pengeluaran.filter(({jumlah}) => jumlah >= 25000);
console.log(tigaPengeluaran)

// soal 4 kontak telepon
// data yang diberikan:
const kontakLama = { mama: "08123456789", papa: "08987654321" };
const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]];

// 1.
const gabunganKontak = {
  ...kontakLama,                   // ambil semua isi kontak lama
  ...Object.fromEntries(kontakBaru) // ubah array jadi object, lalu gabung
};
console.log(gabunganKontak);

// 2.
const nomer = Object.values(gabunganKontak);
console.log(`mama = ${nomer[0]}, papa = ${nomer[1]}, kakak = ${nomer[2]}, adik = ${nomer[3]}`);

// 3.
const daftarKontak = Object.entries(gabunganKontak).map(([nama, nomer]) => ({nama, nomer}));
console.log(daftarKontak);

// 4.
const kontakAnyar = Object.fromEntries(
  Object.entries(gabunganKontak).map(([nama, nomor]) => [nama, `+62${nomor.slice(1)}`])
);

console.log(kontakAnyar);

// soal 5 sistem penilaian kelas
// data yang diberikan:
const nilaiKelas = [
    { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
    { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
    { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 }
];

// 1.
const rataRataTugas = nilaiKelas.map(({ nama, tugas }) => {
  // jumlah semua nilai tugas pakai reduce
  const total = tugas.reduce((a, b) => a + b, 0);
  // hitung rata-rata
  const rata2 = total / tugas.length;
  // kembalikan object baru berisi nama dan rata-rata tugas
  return { nama, rataTugas: rata2 };
});
console.log(rataRataTugas);

// 2.
const ringkasanNilai = nilaiKelas.map(({ nama, tugas, uts, uas }) => {
  // hitung rata-rata tugas
  const totalTugas = tugas.reduce((a, b) => a + b, 0);
  const rataTugas = totalTugas / tugas.length;
  // hitung nilai akhir dengan bobot
  const nilaiAkhir = (rataTugas * 0.3) + (uts * 0.3) + (uas * 0.4);
  // kembalikan object baru berisi nama, rata-rata tugas, uts, uas, dan nilai akhir
  return {
    nama,
    rataTugas,
    uts,
    uas,
    nilaiAkhir: nilaiAkhir.toFixed(1) // dibulatkan 2 angka desimal
  };
});
console.log(ringkasanNilai);

// 3.
const lulus = ringkasanNilai.filter(siswa => siswa.nilaiAkhir >= 80);
console.log(`semua siswa yang lulus:`);
console.table(lulus)

// 4.
const siswaTerbaik = ringkasanNilai.reduce((a, b) => a.nilaiAkhir > b.nilaiAkhir ? a : b);
console.log(`siswa terbaik:`);
console.log(siswaTerbaik);

// 5.
const laporan = ringkasanNilai.map(({ nama, rataTugas, uts, uas, nilaiAkhir }) => {
  return `${nama}, ${nilaiAkhir} (lulus)`;
});

console.log(laporan.join('\n'));














