export default function inputNilai(siswa, kursus, nilai) {
  return {
    ...siswa,
    nilai: { ...siswa.nilai, [kursus]: nilai },
  };
}
