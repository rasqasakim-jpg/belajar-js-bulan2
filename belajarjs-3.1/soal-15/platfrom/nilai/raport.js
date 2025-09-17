export const raportSiswa = (siswa) => {
  const kursus = Object.keys(siswa.nilai);
  const nilaiArr = Object.values(siswa.nilai);
  const rataRata =
    nilaiArr.reduce((a, b) => a + b, 0) / nilaiArr.length;

  console.log(`Raport ${siswa.nama}:`);
  kursus.forEach((k) => {
    console.log(` - ${k}: ${siswa.nilai[k]}`);
  });
  console.log(` - Rata-rata: ${rataRata}`);
  console.log(` - Status: ${rataRata >= 75 ? "Lulus" : "Tidak Lulus"}`);
};
