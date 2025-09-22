// level gampang
// 1.
const barang = [
    {nama: "buku", harga: 10000}
];
const barangJSON = JSON.stringify(barang);
console.log(barangJSON);

// 2.
function hitungLuas(panjang, lebar, callback) {
    const hasil = panjang * lebar;
    callback(hasil);
}
hitungLuas(5, 3, function(luas){
    console.log(`panjang luas ${luas}`);
})

// 3.
function userKu() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        console.log(`data user ${data}`);
    })
    .catch(error => {
        console.log(`terjadi kesalahan ${error}`);
    })
};
userKu();

// 4.
const string = '{"nama":"Andi","umur":20}';

const obj = JSON.parse(string);

console.log("Nama:", obj.nama);
console.log("Umur:", obj.umur);

// 5.
function sayHello(callback) {
    setTimeout(function() {
        callback("hallo")        
    }, 2000);
}
sayHello(function(pesan) {
    console.log(pesan);
});

// 6.
// dikerjakan di html

// 7.
function ambilData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data berhasil diambil");
        }, 3000);
    
    })
}
ambilData()
    .then(hasil => {
        console.log(hasil);
    })

// 8.
function proses() {
    return new Promise(resolve => {
        resolve("Login User")
    })
};
proses()
    .then(result => {
        console.log(result);
        return "Ambil Data";
    })
    .then(result => {
        console.log(result);
        return "Tampilkan Dashboard"
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

// 9.
// di html

// 10.
function bagi(a, b) {
    try {
        if(b === 0) {
            throw new Error ("Tidak bisa membagi dengan nol ")
        }
    }catch(error) {
        console.log("error:",error.message);
    }
};
bagi(10, 0);
