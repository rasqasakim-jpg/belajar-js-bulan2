const menuMakanan = {   // buat object utama
    data: [],           // tempat menyimpan daftar menu dalam bentuk array
    nextId: 1,          // Id untuk setiap makanan baru, dimulai dari satu

    // buat method untuk menambah banyak makanan sekaligus
    tambahBanyak: function(...makanan) {    // pakai rest parameter biar bisa input banyak data
        makanan.forEach(item => {           // loop dengan forEach, loop setiap makanan yang dikirim
            let makananBaru = {             // bikin objek baru untuk setiap makanan 
                id: this.nextId++,          // buat id yang otomotis bisa naik tiap kali tambah makanan
                nama: item.nama,            // nama makanan di isikan di item
                harga: item.harga,          // harga dimasukkan ke item
                tersedia: true              // makanan selalu tersedia boolean true
            };
            this.data.push(makananBaru);    // push makananBaru ke dalam data array
            console.log(`makanan di tambahkan ${item.nama}`); // infokan kalau makanan berhasil di tambah
        });
    },
    // buat method untuk menampilkan semua menu makanan
    lihat: function() { 
        console.log(`=== MENU MAKANAN ===`); // judul nya

        if (this.data.length === 0) {       // jika data kosong
            console.log(`belum ada menu`);  // infokan kosong
            return;                         // mengembalikan belum ada, hentikan function
        }

        this.data.forEach((item, index) => {        // jika ada data maka tampilkan item nya
            const {id, nama, harga, tersedia} = item; // destructuring
            const status = tersedia ? 'Tersedia' : 'Tidak tersedia'; // menggunakan tenary operator
            console.log(`${index + 1}. ID: ${id}, Nama: ${nama}, Harga: ${harga}, Status: ${status}`);
        });
    },
    // method edit harga makanan berdasarkan id
    editHarga: function(id, hargaBaru) {
        const index = this.data.findIndex(item => item.id === id); // findIndex untuk cari posisi index

        if (index === -1) {         // jika index sama dengan -1 berarti tidak ketemu
            console.log(`❌ item ID ${id} tidak ditemukan!`);
            return;                 // hentikan function
      }
      this.data[index] = {          // jika data di temui update harga
        ...this.data[index], // spread: ambil semua property lama
        harga: hargaBaru,    // timpa dengan data baru
      };
      console.log(`✅ item ID ${id} berhasil diupdate!`);
   },
   // method untuk menghapus banyak makanan berdasarkan id
   hapusBanyak: function(...ids) {         // gunakan rest agar hapus banyak id 
        const dihapus = [];                 // buat laci kosong array untuk menyimpan makanan yang berhasil dihapus
        
        ids.forEach(id => {             // loop setiap id yang dikirim
            const index = this.data.findIndex(item => item.id === id);      // cari index makanan
            if (index !== -1) {     // jika index tidak sama dengan -1 
                const {nama} = this.data[index];        // destructuring
                this.data.splice(index, 1);              // hapus id
                dihapus.push(nama);                 // simpan index yang dihapus ke laci dihapus
            }
        });
        console.log(`✅ ${dihapus.join(', ')} berhasil dihapus!` );     // array yang pisah pisah di jadikan satu dengan join di pisahkan dengan koma
        return [...dihapus];        // return spread untuk disebar dan bikin salinan index nya
  },
  salinMenu: function(...pilihId) {         // bisa tanpa parameter (ambil semua), atau kasih id tertentu
    // Kalau tidak ada id yang dikirim, salin semua menu
        if (pilihId.length === 0) {
            return[...this.data];           // return salinan semua data menu
   }
    // Kalau ada id yang dikirim, filter hanya menu dengan id itu
   const dipilih = this.data.filter(item => pilihId.includes(item.id));
       // Kembalikan salinan array hasil filter
   return [...dipilih]
 }
};

console.log("🚀 TESTING MENU MAKANAN");

menuMakanan.tambahBanyak(
    { nama: "Nasi Goreng", harga: 25000 },
    { nama: "Mie Ayam", harga: 20000 },
    { nama: "Es Teh", harga: 5000 },
    { nama: "Ayam Bakar", harga: 35000 }
);

menuMakanan.lihat();

menuMakanan.editHarga({ id: 1, harga: 28000 });
menuMakanan.editHarga({ id: 3, harga: 6000 });

menuMakanan.hapusBanyak();

menuMakanan.lihat();

const menuBackup = menuMakanan.salinMenu(); 
const menuPilihan = menuMakanan.salinMenu();

console.log("Backup semua menu:", menuBackup);
console.log("Menu pilihan:", menuPilihan);
