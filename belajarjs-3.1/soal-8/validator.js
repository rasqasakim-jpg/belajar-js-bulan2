export const cekEmail = (email) => email.indexOf("@") !== -1;
export const cekTelepon = (telepon) => telepon.slice(0,2) === "08";
export const cekUsia = (usia) => usia >= 17;

