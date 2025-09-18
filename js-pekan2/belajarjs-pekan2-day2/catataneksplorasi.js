//push menambah elemen di akhir array
let nama = ['torik','ucup','zidan'];
nama.push('kahfi');
console.log(`nama baru yaitu kahfi terdaftar di akhir array: ${nama}`);

//pop menghapus elemen terakhir
let name = ['torik','ucup','zidan'];
name.pop();
console.log(`hapus nama terakhir: ${name}`);

//shift menghapus elemen pertama
let nam = ['torik','ucup','zidan'];
nam.shift();
console.log(`hapus nama pertama: ${nam}`);

//unshift menambah elemen awal array
let na = ['torik','ucup','zidan'];
na.unshift('kahfi');
console.log(`nama baru yaitu kahfi terdaftar di awal array: ${na}`);

//splice menambah/menghapus elemen diposisi tertentu
let n = ['torik','ucup','zidan'];
n.splice(1,2);
console.log(`nama urut kedua sampai terakhir telah dihapus: ${n}`);

//slice] mengambil sebagian array (tidak merusak array asli)
let a = ['torik','ucup','zidan'];
let b = a.slice(0,1);
console.log(`ambil nama yang juara pertama: ${b}`);

// //transformasi & iterasi
// //map menghasilkan array baru dari hasil transformasi tiap elemen
let c = ['torik','ucup','zidan'];
let d = c.map(function(isi) {
    return 'nama:'  + isi;
});
console.log(`nama nama yang juara lomba tartil: ${d}`);

//forEach melakukan aksi ke tiap elemen (tanpa menghasilkan array baru)
let e = ['c70','astrea','win'];
console.log('list sepeda classic:');
e.forEach(function(isi) {
    console.log('sepeda: ' + isi);
});

//.indexOf mencari index elemen
let f = ['torik','ucup','zidan'];
let g = f.indexOf('ucup');
console.log(`ucup ada di index ke: ${g}`);

//.includes mengecek apakah array mengandung element tertentu, mengembalikan boolean.
let kota = ['surabaya','malang','bandung'];
let h = kota.includes('surabaya');
console.log(`surabaya ada di array: ${h}`);

//concat menggabungkan dua atau lebih array menjadi array baru.
let hobi = ['renang','basket'];
console.log(`ucup memiliki hobi: ${hobi}`);
let tambah = hobi.concat('voli','catur');
console.log(`ucup menambahkan skill baru jadi hobinya bertambah: ${tambah}`)

//join menggabungkan semua element array menjadi string dengan separator.
let like = ['membaca','menulis','coding'];
let tekslike = like.join(", ");
console.log(`ucup suka: ${tekslike}`);

//reverse membalik urutan element dalam array.
let suka = ['cilok','siomay','bakso','mie'];
let balik = suka.reverse();
console.log(`${balik}`);

//sort mengurutkan element array secara alfabetis (default) atau sesuai fungsi compare.
let teman = ['abi','irgi','ucup','farid'];
console.log('tolong urutkan nama sesuai alfabet!!!');
let urut = teman.sort();
console.log(urut);

//filter membuat array baru berisi element yang memenuhi kondisi.
let nilai = [80,88,75,77,90];
let hasil = nilai.filter(function(rata) {
    return rata >= 80;
});
console.log(hasil);

//reduce mengembalikan element pertama yang memenuhi kondisi.
let penjumlahan = [5,4,3,2,1,6,15];
let totalPenjualan = penjumlahan.reduce(function(a,b,c,d){
    console.log(`index: ${c}, value terbaru: ${a}, element/item: ${b}`);
    let hasil = a + b;
    return hasil;
},1);
console.log(totalPenjualan);


//find mengembalikan element pertama yang memenuhi kondisi.
let motor = [
    {nama: 'win'},
    {nama: 'astrea'},
    {nama: 'c70'}
];
let motorTua = motor.find(function(a) {
    return a.nama === 'c70';
})
console.log(motorTua);

//some mengecek apakah minimal ada satu element yang memenuhi kondisi.
let dana = [25000,5000,-10000,];
let adaMin = dana.some(function(a) {
    return a < 0;
});
console.log(adaMin);

//every mengecek apakah semua element memenuhi kondisi.
let uang = [25000,5000,10000,];
let adaUang = uang.every(function(a) {
    return a > 0;
});
console.log(adaUang);

//findindex mengembalikan index element pertama yang memenuhi kondisi.
let harga = [25000,5000,10000,];
let indexHarga = harga.findIndex(function(a) {
    return a > 5000;
});
console.log(indexHarga);

//arraylanjutan
//flat meratakan nested array menjadi satu level.
let mapel = [['ipa','ips'],['matematika','fisika'],['biologi','kimia']];
let semuaMapel = mapel.flat();
console.log(semuaMapel);

//flatMap gabungan dari:

// .map() → untuk mengubah isi array

// .flat() → untuk meratakan array bersarang (nested)

// Jadi intinya: ubah dulu → lalu diratakan.
let angka = [1,2,3];
let hasilYa = angka.flatMap(function(a) {
    return a * 2;                       
});                     
console.log(hasilYa);

//spreadoperator (...) membuat shallow copy array baru
let arrayAsli = ['ucup','torik','zidan'];
let arrayBaru = [...arrayAsli];   // (...) untuk buka isi array
arrayBaru.push('kahfi'); // push dengan tambahkan nama kahfi
console.log(arrayBaru);
console.log(arrayAsli);

//destructuringarray memungkinkan ekstrak nilai array ke variabel terpisah.
let hutang = [5000,10000,15000];
let [x,y,z] = hutang;
console.log(x);
console.log(y);
console.log(z);


