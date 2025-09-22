// 20.
// setTimeout(() => {
//   console.log("Login berhasil");

//   setTimeout(() => {
//     console.log("Ambil data");

//     setTimeout(() => {
//       console.log("Tampilkan data");

//       setTimeout(() => {
//         console.log("Simpan log");
//       }, 1000);

//     }, 1000);

//   }, 1000);

// }, 1000);

// function step(pesan) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       console.log(pesan);
//       resolve();
//     }, 1000);
//   });
// }

// step("Login berhasil")
//   .then(() => step("Ambil data"))
//   .then(() => step("Tampilkan data"))
//   .then(() => step("Simpan log"))
//   .catch(err => console.error("Error:", err));

  // 21.
  async function ambilData() {
     try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments");
        const data = await res.json();

        const gmail = data.filter(c => c.email.includes("@gmail.com"));
        console.log("komentar dengan email gmail", gmail,  "kosong karena tidak ada koment @gmail.com");
     } catch (error) {
        console.error("Terjadi error:", error);
     }
  }
  ambilData();

  // 22.
 async function prosesData(data) {
  try {
    if (!data || data.length === 0) {
      throw new Error("Data tidak boleh kosong");
    }

    console.log("Data berhasil diproses:", data);
  } catch (err) {
    console.error("Terjadi error:", err.message);
  }
}

prosesData([]);           
prosesData(["apel", "mangga"]); 

  // 23.
// di html

  