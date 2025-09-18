let nama = ["irgi","torik","zidane"];  // simpan nama
console.log(nama); // tampilkan semua nama

let name = ("irgi","torik","zidane")
name.push("ucup"); // tambah nama ucup dengan push
console.log(name);

let buah = ["apel","jeruk","mangga"];
console.log(buah[0]);  // tampilkan apel karena index menghitungnya mulai dari 0
console.log(buah.length); // tampilkan panjang array

let warna = ['merah', 'biru', 'hijau'];
warna.pop(); // menghapus akhir
console.log(warna); 

let nilai = [80, 90, 75];
for(let i = 0; i < nilai.length; i++) { // for kan agar di increment
    console.log('Nilai ke-' + (i+1) + ': ' + nilai[i]);
} // dan hasilnya nilai ke - 1 sampai panjang array

let nam = ['torik','ucup','zidan'];
nam.shift(); // hapus nama pertama
console.log(`${nam}`);

let na = ['torik','ucup','zidan'];
na.unshift('kahfi'); // tambah nama pertama
console.log(`${na}`);

let n = ['torik','ucup','zidan'];
n.splice(1,2); // hapus nama urut kedua sampai terakhir
console.log(`${n}`);

let a = ['torik','ucup','zidan'];
let b = a.slice(0,1); // ambil nama index 0 yaitu di awal berjumlah 1 jadi ya yang di ambil torik
console.log(`ambil nama yang juara pertama: ${b}`);

let motor = ['honda','yamaha','suzuki'];
let motor1 = ['nmx','rxking','supra'];
let satu = motor.concat(motor1); // gabungkan 
console.log(satu);

let c = ['torik','ucup','zidan'];
let d = c.map(function(isi) { // menghasilkan arrray baru dari hasil pergantian element
    return 'nama:'  + isi;
});
console.log(`nama nama yang juara lomba tartil: ${d}`);

let e = ['c70','astrea','win'];
console.log('list sepeda classic:');
e.forEach(function(isi) {       // melakukan aksi tiap elemnt tanpa menghasilkan array baru
    console.log('sepeda: ' + isi);
});

let f = ['torik','ucup','zidan'];
let g = f.indexOf('ucup');          // untuk mencari index element
console.log(`ucup ada di index ke: ${g}`);

let kota = ['surabaya','malang','bandung'];
let h = kota.includes('surabaya');      // untuk mengecek apakah ada di array
console.log(`surabaya ada di array: ${h}`);

let like = ['membaca','menulis','coding'];
let tekslike = like.join(", ");     // menggabungkan element jadi string
console.log(`ucup suka: ${tekslike}`);

let suka = ['cilok','siomay','bakso','mie'];
let balik = suka.reverse();     // membalik urutan array
console.log(`${balik}`);

let teman = ['abi','irgi','ucup','farid'];
console.log('tolong urutkan nama sesuai alfabet!!!');
let urut = teman.sort();        // mengurutkan element
console.log(urut);










