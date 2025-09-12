const menuMakanan = {
    data: [],
    nextId: 1,

    tambahBanyak: function(...makanan) {
        makanan.forEach(item => {
            let makananBaru = {
                id: this.nextId++,
                nama: item.nama,
                harga: item.harga,
                tersedia: true 
            };
            this.data.push(makananBaru);
            console.log(`makanan di tambahkan ${item.nama}`);
        });
    },
    lihat: function() {
        console.log(`=== MENU MAKANAN ===`);

        if (this.data.length === 0) {
            console.log(`belum ada menu`);
            return;
        }
        this.data.forEach((item, index) => {
            const {id, nama, harga, tersedia} = item;
            const status = tersedia ? 'Tersedia' : 'Tidak tersedia';
            console.log(`ID: ${id}, Nama: ${nama}, Harga: ${harga}, Status: ${status}`);
        });
    },
    editHarga: function(id, hargaBaru) {
        const index = this.data.findIndex(item => item.id === id);

        if (index !== -1) {
            console.log(`❌ item ID ${id} tidak ditemukan!`);
            return;
      }
      this.data[index] = {
        ...this.data[index], // spread: ambil semua property lama
        harga: hargaBaru,    // timpa dengan data baru
      };
      console.log(`✅ item ID ${id} berhasil diupdate!`);
   },
   hapusBanyak: function(...ids) {
        const dihapus = [];
        
        ids.forEach(id => {
            const index = this.data.findIndex(item => item.id === id);
            if (index !== -1) {
                const {nama} = this.data[index];
                this.data.splice(index, 1);
                dihapus.push(nama);
            }
        });
        console.log(`✅ ${dihapus.join(', ')} berhasil dihapus!` );
        return [...dihapus];
  },
  salinMenu: function(...pilihId) {
        if (pilihId.length === 0) {
            return[...this.data];
   }
   const dipilih = this.data.filter(item => pilihId.includes(item.id));
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
