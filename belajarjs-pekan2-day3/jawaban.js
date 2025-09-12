// 1.
let perpustakaan = {};
// 2.
let daftarPengunjung = [];
// 3.
// object: yaitu punya pasangan key : value
// array: punya index yang hitung mulai dari 0
// 4.
// bagian dari object => property
// bagian dari array => element
// nama identifier dalam object : key
// isi dari identifier tersebut : value

// manipulasi data
// 5.
perpustakaan.nama = "Perpustakan Kota",
perpustakaan.alamat = "JL. Pendidikan No. 123",
perpustakaan.tahunberdiri = 1995

console.log(perpustakaan);
// 6.
daftarPengunjung.push('irgi','thoriq','ucup');
console.log(daftarPengunjung);
// 7. 
perpustakaan.nama = "Perpustakaaan Digital Kota"
console.log(perpustakaan);
// 8.
daftarPengunjung[0] = 'Ahmad Budi';
console.log(daftarPengunjung);
// 9.
perpustakaan.jumlahbuku = 500;
console.log(perpustakaan);
// 10.
daftarPengunjung.push('Sari Dewi');
console.log(daftarPengunjung);

// struktur nested dan complex
// 11.
let kategoriBuku = [['fiksi', 'non-fiksi',] ['sains', 'sejarah', 'biografi']];

// 12.
perpustakaan.fasilitasPerpustakaan = {
    ruangBaca: {kapasitas: 100, lantai: 1},
    ruangKomputer: {kapasitas: 30, lantai: 2}
};
console.log(perpustakaan);

// 13.
delete perpustakaan.tahunberdiri;
console.log(perpustakaan);

// 14.
let obj1 = {
    anggota : 'jenisKeanggotaan',   // key biasa
    'jenis anggota' : 'jenis keanggotaan',  // key dengan spasi
    2025 : 'anggota2023',     // key dengan angka
    'akun@' : 'santri@gmail.com'    // key dengan simbol
};
// console.log(obj1);

// looping dan iterasi
// 15.
for (let a in perpustakaan) {
     console.log(`${a} : ${perpustakaan[a]}`)
}

// 16.
for (let b in perpustakaan.fasilitasPerpustakaan) {
     console.log(`${b} : ${perpustakaan.fasilitasPerpustakaan[b]}`)
}

// 17.
let cabangPerpustakaan = perpustakaan; // ganti nama perpustakaan dengan nama cabangPerpustakaan dan duplikat kan 
console.log(cabangPerpustakaan);
cabangPerpustakaan.nama = 'Digital Cabang Selatan';
// console.log(cabangPerpustakaan);

// object dengan function
// 18.
let sistemPerpustakaan = {
    tambahBuku: function(judul,pengarang) {
        return`- buku ${judul} dari ${pengarang}`;   
    },
    cariBuku: function(judul) {
        return`mencari buku berdasarkan ${judul} ditemukan`;
    },
    hitungTotalBuku: function() {
        return 0;
    },
    tampilkanInfo: function() {
        console.log('=== INFORMASI PERPUSTAKAAN DIGITAL===\n');
        console.log(`Nama: ${perpustakaan.nama}`);
        console.log(`Alamat: ${perpustakaan.alamat}`);
        console.log(`Total Koleksi Buku: ${perpustakaan.jumlahbuku}\n`);
        console.log(`=== FASILITAS TERSEDIA ===\n`);
        console.log(`Ruang baca:\nKapasitas: ${perpustakaan.fasilitasPerpustakaan.ruangBaca.kapasitas} orang \nlokasi: lantai ${perpustakaan.fasilitasPerpustakaan.ruangBaca.lantai}\n`);
        console.log(`Ruang komputer:\nKapasitas: ${perpustakaan.fasilitasPerpustakaan.ruangKomputer.kapasitas} orang \nlokasi: lantai ${perpustakaan.fasilitasPerpustakaan.ruangKomputer.lantai}\n`);
        console.log(`=== KOLEKSI BUKU TERBARU ===\n`);
        console.log(`${sistemPerpustakaan.tambahBuku("1. Laskar Pelangi", "Andrea Hirata")}\n`);
        console.log(`${sistemPerpustakaan.tambahBuku("2. Bumi Manusia", "Pramoedya Ananta Toer")}\n`);
        console.log(`=== PENGUNJUNG HARI INI ===\n`);
        console.log(`- ${daftarPengunjung[0]}\n- ${daftarPengunjung[1]}\n - ${daftarPengunjung[2]}`);
        console.log(`====================================`);
        console.log(`Status sistem: online\n`);
        console.log(`Terakhir diupdate: 11 september 2025`);
        console.log(`====================================`);
        
        
        
        
        
        
        
        
    }
};
// console.log(sistemPerpustakaan.tambahBuku("Laskar Pelangi", "Andrea Hirata"));
// console.log(sistemPerpustakaan.cariBuku("Laskar Pelangi"));
// console.log("Total Buku: " + sistemPerpustakaan.hitungTotalBuku());
sistemPerpustakaan.tampilkanInfo();







