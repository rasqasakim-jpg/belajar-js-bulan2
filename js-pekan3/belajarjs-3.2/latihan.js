// JSON.stringify (3 soal)
// 1.
const dataSiswa = {
    nama: "irgi",
    umur: 19,
    jurusan: "TKJ"
};

const jsonstring = JSON.stringify(dataSiswa);
console.log(jsonstring);
// 2.
const barang = {
    produk: "laptop",
    harga: 7500000,
    stok: 10
};

const jsonstring2 = JSON.stringify(barang);
console.log(jsonstring2);
// 3.
const belanjaan = [
    {nama: "baju", jumlah: 2, harga: 30000},
    {nama: "topi", jumlah: 1, harga: 15000}
];

const jsonstring3 = JSON.stringify(belanjaan);
console.log(jsonstring3);

// JSON.parse(3 soal)
// 4.
const dataJSON = '{"nama":"Budi","usia":21,"status":"Mahasiswa"}';

const data = JSON.parse(dataJSON);

console.log("Nama:", data.nama);
console.log("Status:", data.status);
// 5.
const dataJSON2 = '{"buah":["apel","jeruk","pisang"]}';

try {
    const obj = JSON.parse(dataJSON2); // berhasil parse string jadi object
    obj.buah.forEach((tempat, index) =>
        console.log(`- buah ke-${index + 1}: ${tempat}`)
    );
} catch (error) {
    console.error("Parsing JSON gagal bro:", error.message);
}
// 6.
const dataJSON3 = `{"merk":"honda","model":"civic","tahun":2022}`

try {
  const obj = JSON.parse(dataJSON3);

  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
} catch (error) {
  console.error("Parsing JSON gagal bro:", error.message);
}

// callback sederhana(3 soal)
// 7.
function sapaUser(nama, callback) {
  console.log("halo " + nama); 
  callback();
}

sapaUser("ucup", function() {
  console.log("Selamat belajar JSON!");
});
// 8.
function hitungLuas(panjang, lebar, callback) {
    const luas = panjang * lebar;
    callback(luas);
}

hitungLuas(5,10, function(hasil) {
    console.log(`hasil luas adalah ${hasil}`);
})
// 9.
function prosesData(data, callback) {
    if (Array.isArray (data)){
        callback(data.length);
    }else{
        callback(data);
    }
};
prosesData([1, 2, 3, 4],function(hasil){
    console.log(`panjang array adalah ${hasil}`);
})

// callback anonim (2 soal)
// 10.
function sapaUser2(nama, callback) {
    console.log("halo " + nama);
    callback();
}

sapaUser2("aisyah", function(){
    console.log("sampai jumpa!");
    
})
// 11.
function kirimPesan(pesan, callback) {
    console.log("Pesan: " + pesan.toUpperCase());
    callback();
}

kirimPesan("i love you baby", function(){
    console.log("sampai jumpa!");
})

// callback timeout (2 soal)
// 12.
function prosesAsync(callback) {
    setTimeout(function(){
        callback("proses selesai setelah 2 detik");
    },2000);
}

prosesAsync(function(pesan){
    console.log(pesan);
})
// 13.
function ambilData(callback) {
    setTimeout(function(){
        callback();
    },3000);
}

ambilData(function(){
    let data = { id: 1, nama: "laptop" };
    console.log(data);
})




