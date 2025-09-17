export default {
    hitungJumlah: (daftarBuku) => daftarBuku.length,
    cariBuku: (daftarBuku, judul) => daftarBuku.find(b => b.judul === judul), 
    bukuTebal: (daftarBuku) => daftarBuku.filter(b => b.halaman > 300)
};
