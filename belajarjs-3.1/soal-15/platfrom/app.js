// Default import
import daftarSiswa from "./siswa/daftar.js";

// Named import
import { tampilProfil } from "./siswa/profil.js";

// Alias import
import { tambahKursus as addCourse } from "./kursus/katalog.js";

// Wildcard/namespace import
import * as Nilai from "./nilai/raport.js";

// Default import enroll
import enrollKursus from "./kursus/enroll.js";

// Default import inputNilai
import inputNilai from "./nilai/inputNilai.js";

// Namespace utils
import * as Status from "./utils/status.js";

// === Workflow ===
const siswa1 = daftarSiswa("Budi");
console.log(Status.statusOK(`Siswa baru: ${siswa1.nama}`));

const kursus1 = addCourse("JavaScript");
console.log(Status.statusOK(`Kursus ditambahkan: ${kursus1.nama}`));

const siswaEnroll = enrollKursus(siswa1, kursus1);
console.log(Status.statusOK(`${siswaEnroll.nama} berhasil enroll kursus: ${kursus1.nama}`));

const siswaNilai = inputNilai(siswaEnroll, kursus1.nama, 95);
console.log(Status.statusOK(`Nilai untuk ${kursus1.nama}: ${siswaNilai.nilai["JavaScript"]}`));

Nilai.raportSiswa(siswaNilai);
