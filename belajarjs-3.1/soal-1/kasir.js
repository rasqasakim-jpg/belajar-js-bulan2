export default function total(listHarga) {
    return listHarga.reduce((a, b) => a + b, 0);
};