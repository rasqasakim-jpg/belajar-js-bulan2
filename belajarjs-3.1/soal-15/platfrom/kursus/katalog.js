export const tambahKursus = (nama) => {
  return { nama, id: Date.now() };
};

export const hapusKursus = (id) => {
  return `Kursus dengan ID ${id} dihapus`;
};
