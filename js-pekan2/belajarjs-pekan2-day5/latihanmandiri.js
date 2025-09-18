// 1.
const dataSiswa = [
    {nama: "irgi", nilai: 85, jurusan: "ips"},
    {nama: "ucup", nilai: 95, jurusan: "ipa"},
    {nama: "kahfi", nilai: 70, jurusan: "ips"}
];
const siswa = dataSiswa.filter(item => item.nama === "ucup")
console.log(siswa);

// 2.
const nilai = dataSiswa.filter(item => item.nilai > 80);
console.log(nilai); 

// 3.
const rataRata = dataSiswa.reduce((a, b) => a + b.nilai, 0);
const rataRataSiswa = rataRata / dataSiswa.length;
console.log(`rata rata siswa = ${rataRataSiswa}\n`);

// ===================================================

// ============== STUDI KASUS ================
const transaksi = [
    {namaBarang: "laptop", jumlah: 1, hargaSatuan: 4500000},
    {namaBarang: "headset", jumlah: 3, hargaSatuan: 150000},
    {namaBarang: "mouse", jumlah: 2, hargaSatuan: 100000},
    {namaBarang: "charger", jumlah: 4, hargaSatuan: 120000},
    {namaBarang: "keyboard", jumlah: 1, hargaSatuan: 800000 }
];

const daftarBarang = transaksi.filter(item => item.jumlah * item.hargaSatuan > 500000);
console.log(`daftar barang yang total belanjanya lebih dari 500000:`);
console.log(daftarBarang);

const total = transaksi.reduce((a, b) => a + b.jumlah * b.hargaSatuan, 0);
console.log(`total belanjanya: Rp${total}`);

const ringkasan = transaksi.map(item => ({
  namaBarang: item.namaBarang,
  total: item.jumlah * item.hargaSatuan
}));

console.log("Ringkasan belanja:", ringkasan);


