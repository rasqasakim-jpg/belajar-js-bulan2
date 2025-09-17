export default function enrollKursus(siswa, kursus) {
  return {
    ...siswa,
    kursus: [...siswa.kursus, kursus.nama],
  };
}
