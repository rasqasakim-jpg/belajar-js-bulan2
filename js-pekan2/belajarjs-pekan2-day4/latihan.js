// latihan mandiri
// 1.
let nilai = [1,2,3,4];
let [a,b,c,d] = nilai;
console.log(`mengambil nilai ${a}`);
// 2.
let mobil = {
    merk: {
        merk1: 'yamaha',
        merk2: 'honda',
    },
    tahun: {
        tahun1: '2003',
        tahun2: '2002',
    }
};
console.log(mobil);

// 3.
let motor = ['mio','vario'];
let motor2 = ['scoopy', ...motor]
console.log(motor2);

// 4.

function hasil(...mobil) {
    return mobil.reduce((a, b) => a + b);
}
console.log(hasil('knalpot ','ban ','roda'));

// ===============================================
// studi kasus
let siswa = {
    nama: "irgi",
    usia: "17",
    kelas: "XII",
    jurusan: "IPA"
};
// 1.
let {nama, kelas} = siswa;
console.log(`Nama: ${nama}`);
console.log(`kelas: ${kelas}`);
// 2.
let siswa2 = {...siswa, nilai: 90};
console.log(siswa2);
// 3.
function rata(...nilai) {
    return nilai.reduce((a, b) => a + b) / nilai.length;
}
console.log(rata(95,80,88));
