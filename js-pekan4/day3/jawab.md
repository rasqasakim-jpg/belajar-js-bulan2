## JAWABAN
1. localstrage untuk menyimpan data dalam browser, Data disimpan tanpa batas waktu dan
 Data tetap ada meskipun tab atau browser ditutup

2. jika localstorage jika tab ditutup data tersimpan, jika sessionstorage data akan hilang setelah tab ditutup

3.  Simpan data string
localStorage.setItem("nama", "ucup");

4. Ambil kembali datanya
let data = localStorage.getItem("nama");
console.log(data); 

5. Hapus data dengan key "nama"
localStorage.removeItem("nama");

 Coba ambil lagi
let data = localStorage.getItem("nama");
console.log(data); 