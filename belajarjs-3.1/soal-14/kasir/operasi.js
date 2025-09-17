export const subtotal = (items) => items.reduce((a, b) => a + b, 0);

export const pajak = (total, persen = 10) => total * (persen / 100);

export const diskon = (total, persen = 5) => total - (total * (persen / 100));

export const kembalian = (bayar, total) => bayar - total;