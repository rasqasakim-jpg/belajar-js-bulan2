### 1. ###
## Callback Function ##
fungsi yang dikirim sebagai parameter ke fungsi lain, lalu di panggil balik setelah suatu proses selesai.
## promise ##
promise adalah sebuah janji operasi asyn akan selesai atau gagal

## 2. ##
- sintaksnya mirip sinkron biasa
- lebih rapi
- tidak ada then bertumpuk
contoh:
function ambilData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(" Data berhasil diambil"), 1000);
  });
}

async function prosesData() {
  try {
    const result = await ambilData();
    console.log(result);

    const result2 = "Data diproses";
    console.log(result2);

    const result3 = " Data final";
    console.log(result3);
  } catch (err) {
    console.error(" Error:", err);
  }
}

prosesData();

## 3. ##
try...catch dipakai untuk menangkap error supaya program tidak langsung berhenti ketika terjadi kesalahan
contoh:
async function getUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/userzzz/1"); 
     URL salah (seharusnya /users/1)

    const data = await response.json();
    console.log("Nama:", data.name);
  } catch (error) {
    console.error(" Terjadi error saat ambil data API:", error.message);
  }
}

getUserData();

## 4. ##
- JSON.stringify yaitu ubah object jadi string JSON
- JSON.parse yaitu ubah string JSON jadi object
contoh:
const user = { nama: "ucup", umur: 20 };

Objek => String
const str = JSON.stringify(user);
console.log(str); 
{"nama":"ucup","umur":20}

String => Objek
const obj = JSON.parse(str);
console.log(obj.nama); 

## 5.
- lebih terorganisir kode dipisah sesuai tugasnya
- mudah dirawat atau di kembangkan
- untuk kerja tim juga enak


