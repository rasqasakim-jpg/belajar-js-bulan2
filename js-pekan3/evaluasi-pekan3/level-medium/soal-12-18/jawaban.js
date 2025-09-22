// 12
// async function ambilUser(id) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//     const data = await res.json();
//     console.log("User:", data);
//   } catch (err) {
//     console.error("Terjadi error:", err);
//   }
// }

// ambilUser(1);

// // 13
// const angka = [1,2,3,4,5]

// const kuadrat = angka.map(num => num * num)
// console.log(kuadrat)

// // 14.
// async function ambilPosts() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     console.log("Data Posts:", data);
//   } catch (err) {
//     console.error("Terjadi error:", err);
//   }
// }

// ambilPosts();

// 15.
const string = '{"id":1,"nama":"Budi","status":"inactive"}';

let obj = JSON.parse(string);

obj.status = "active";

const newstring = JSON.stringify(obj);
console.log(newstring);

// 16.
function getProduk(stok) {
    return new Promise((resolve, reject) => {
      if(stok > 0) {
        resolve("produk tersedia")
      }else {
        reject("produk habis")
      }
    });
}
getProduk(2)
  .then(pesan => console.log(pesan))
  .catch(error => console.log(error))
  
// 17.
// di html

// 18.
function step(pesan) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(pesan);
      resolve();
    }, 1000);
  })
};
step("connect database")
  .then(() => step("ambil data produk"))
  .then(() => step("tampilkan data"))
  .catch(error => console.log(error));
