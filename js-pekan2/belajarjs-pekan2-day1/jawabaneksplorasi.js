//soal 1.
let nama = ['thoriq','kahfi','ucup','zidan','farid'];
console.log(`nama pertama ${nama[0]}, nama terakhir ${nama[4]}`);
console.log(nama.length);

//soal 2.
let hobi = [];
hobi.push('membaca');
hobi.push('belajar');
hobi.push('bernyanyi');
console.table(hobi);

//soal 3.
let mataPelajaran = ['ipa','ips','mtk','pkn'];
mataPelajaran.pop();
console.table(mataPelajaran);

//soal 4.
let angka = [1,2,3,4,5,];
for(let i = 0; i < angka.length; i++) {
    console.log('angka ke-' + (i+1) + ': ' + angka[i]);
}

//soal 5.
let city = ['malang','surabaya','banyuwangi','bandung']
for(let i = 0; i < city.length; i++) 
    if (i == 0) {
        console.log(`kota saya di ${city[2]}`);
    }else {
        console.log(`kota tidak ditemukan`);
    }

//soal 6.
let film = ['jhon wick','doraemon','pertaruhan','naruto']
film[1] = 'equalizer';
console.table(film);

//soal 7.
let olahraga = ['catur','lari','sepak bola']
olahraga.unshift('renang');
console.table(olahraga);

//soal 8.
let namaBulan = ['januari','februari','maret','april','mei'];
let bulanHapus = namaBulan.shift();
console.log(`bulan yang dihapus adalah ${bulanHapus}`);
console.log(`sisa array adalah ${namaBulan}`);

//soal 9.
let ringan = ['cilok','sempol'];
let berat = ['mie ayam','lalapan'];
let gabungan = ringan.concat(berat);
console.log(gabungan);

//soal 10.
let urutan = ['a','b','c','d','e'];
console.log(urutan);
urutan.reverse();
console.log(urutan);

//soal 11.
let namaOrang = ['thoriq','kahfi','ucup','zidan','farid','irgi'];
namaOrang.sort();
console.log(namaOrang);

//soal 12.
let mapel = ['ipa','ips','mtk','pkn'];
function cekMapel(namaMapel) {
  if (mapel.includes(namaMapel)) {
    console.log(`Mata pelajaran ${namaMapel} ditemukan.`);
  } else {
    console.log(`Mata pelajaran ${namaMapel} tidak ditemukan.`);
  }
}
cekMapel("ipa");         
cekMapel("mtk")

//soal 13.
let hari = ['senin','selasa','rabu','kamis','jumat','sabtu','minggu'];
let bagian = hari.slice(0, 5);
console.log(`hari kerja adalah ${bagian}`);

//soal 14.
let namaNegara = ['brunei','india','rusia','indonesia','malaysia'];
namaNegara.forEach(function(item, index) {
  console.log("Negara ke-" + (index + 1) + ": " + item);
});

//soal 15.
let angkaYa = [1, 2, 3, 4];
let dikali2 = angkaYa.map(function(number) {
    return number * 2;
});
console.log(dikali2);

//soal 16.
let nilaiUjian = [55, 72, 88, 60, 95, 40, 78];

let nilai = nilaiUjian.filter(function(nilai) {
  return nilai >= 70;
});

console.log(`nilai lulus adalah ${nilai}`);

//soal 17.
let barang = [150000,270000,120000,300000,200000];
let total = barang.reduce(function(sum, harga) {
    return sum + harga;
},0);
console.log(`total harga barang adalah ${total}`);

//soal 18.
let teman = ['thoriq','kahfi','ucup','zidan','farid'];
let cari = teman.find(function(item){
    return item.length > 5;
})
console.log(cari);

//soal 19.
let tinggiBadan = ['160','165','170','175'];
let cekTinggi = tinggiBadan.some(function(hight){
    return hight > 170;
});
let cekTinggi2 = tinggiBadan.every(function(hight){
    return hight > 150;
});
console.log(cekTinggi);
console.log(cekTinggi2);

//soal 20.
let iniAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let totalYa = iniAngka
    .filter(function(num) { return num % 2 === 0; })
    .map(function(num) { return num * 3; })
    .reduce(function(sum, num) { return sum + num; }, 0);
console.log(totalYa)














