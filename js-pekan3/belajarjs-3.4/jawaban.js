// 1.
function helloAsync() {
    return new Promise((resolve) => {
        resolve("halo async")
    })   
}
async function sapa() {
    let hasil = await helloAsync()
    console.log(hasil)
}
sapa();

// 2.
function ambilData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data berhasil diambil")
        }, 2000);
    });
}
async function ambil() {
    let hasil = await ambilData()
    console.log(hasil)
}
ambil();

// 3.
function getNumber() {
    return new Promise((resolve) => {
        resolve(45)
    });
};
async function number() {
    let hasil = await getNumber()
    console.log(hasil)
}
number();

// 4.
function tambahLima(x) {
    return new Promise((resolve) => {
            resolve(x + 5)
     });
};
async function tambah() {
    let hasil = await tambahLima(5)
    console.log(hasil)
}
tambah();

// 5.
async function throwError() {
    throw new Error("terjadi kesalahan");
}
async function jalankan() {
    try{
        await throwError();
        console.log("tidak ketangkap disini");
    } catch (error) {
        console.log("error ketangkap", error.message ); 
        
    }
}
jalankan();

// 6.
async function getSurat() {
    try {
        const response = await fetch("https://equran.id/api/v2/surat/1")
        const result = await response.json();
        console.log("nama surat:",result.data.namaLatin);
    }catch(error) {
        console.log("terjadi kesalahan", error.message);
    }
}
getSurat();

// 7.
async function getSurat() {
    try {
        const response = await fetch("https://equran.id/api/v2/surat/1hfh");
        if (!response.ok) {
            throw new Error("gagal mengambil data")
        }
        const result = await response.json();
        console.log("nama surat:", result.data.namaLatin);
    }catch(error) {
        console.log("error ketangkap:",error.message);
    }
}
getSurat();

// 8.
async function getSurat() {
    try {
        const response = await fetch("https://equran.id/api/v2/surat/1hfh");
        if (!response.ok) {
            throw new Error("gagal mengambil data")
        }
        const result = await response.json();
        console.log("nama surat:", result.data.namaLatin);
    }catch(error) {
        console.log("error ketangkap:",error.message);
    }finally {
        console.log("proses selesai");     
    }
}

9.
async function getSurat() {
    try {
        const response = await fetch("https://equran.id/api/v2/tafsir/112");
        if (!response.ok) {
            throw new Error("Gagal mengambil data")
        }
        const result = await response.json();
        console.log("tafsir surat:", result.data.namaLatin);
        
        result.data.tafsir.forEach(item => {
            console.log(`ayat ${item.ayat}: ${item.teks}`);
        });
    } catch(error) {
        console.log("error",error.message );
    }finally {
        console.log("proses selesai");
    };
};
getSurat()

// 10.
async function getSuratSalah() {
  try {
    const response = await fetch("https://equran.id/api/v2/surattidakada");

    if (!response.ok) {
      throw new Error("Gagal mengambil data dari API");
    }

    const result = await response.json();
    console.log(result);

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

getSuratSalah();

// 11.
async function getSuratAll() {
    try {
        const [surat1, surat112] = await Promise.all([
            fetch("https://equran.id/api/v2/surat/1"),
            fetch("https://equran.id/api/v2/surat/112")
        ])
        if (!surat1.ok || !surat112.ok) {
            throw new Error("Gagal mengambil data dari API")
        }
        const [data1, data112] = await Promise.all([
            surat1.json(),
            surat112.json()
        ]);
        console.log("nama surat 1:", data1.data.namaLatin);
        console.log("nama surat 112:", data112.data.namaLatin);
    }catch(error) {
        console.log("error", error.message);
    }finally {
        console.log("proses selesai");
    }
}
getSuratAll();

// 12.
async function racePromise() {
    try {
        const cepat = new Promise((resolve) => 
            setTimeout(() => resolve("seselai dalam 1 detik"), 1000)
        );
        const lama = new Promise((resolve) => 
            setTimeout(() => resolve("selesai dalam 3 detik"), 3000)
        );
        const hasil = await Promise.race([cepat, lama]);
        console.log("yang tercepat:", hasil);
        
    }catch(error) {
        console.log("error", error.message);
    }finally {
        console.log("proses selesai");
    }
}
racePromise();

// 13.
async function allSettledDemo() {
  try {
    const promises = [
      Promise.resolve("Data 1"),
      Promise.resolve("Data 2"),
      Promise.reject("Error 3")
    ];

    const results = await Promise.allSettled(promises);

    results.forEach((result, index) => {
      console.log(`Promise ${index + 1}:`);
      console.log("  Status:", result.status);
      if (result.status === "fulfilled") {
        console.log("  Value :", result.value);
      } else {
        console.log("  Reason:", result.reason);
      }
    });
  } finally {
    console.log("Proses selesai");
  }
}

allSettledDemo();

// 14.
async function fetchMultiple() {
  try {
    const urls = [
      "https://equran.id/api/v2/surat",          
      "https://equran.id/api/v2/asmaulhusna",     
      "https://equran.id/api/v2/arbain"           
    ];

    const responses = await Promise.all(urls.map(url => fetch(url)));

    responses.forEach((response, index) => {
      if (!response.ok) {
        throw new Error(`Fetch gagal untuk endpoint ke-${index + 1}`);
      }
    });

    const datas = await Promise.all(responses.map(resp => resp.json()));

    datas.forEach((j, i) => {
      const endpoint = urls[i];
      const arr = j.data;  
      if (Array.isArray(arr)) {
        console.log(`Dari ${endpoint}: jumlah data = ${arr.length}`);
      } else {
        console.log(`Dari ${endpoint}: struktur data tidak seperti array`);
      }
    });

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

fetchMultiple();

// 15.
async function fetchSurat(id) {
  try {
    if (!Number.isInteger(Number(id))) {
      throw new Error("ID surat harus angka");
    }

    const response = await fetch(`https://equran.id/api/v2/surat/${id}`);

    if (!response.ok) {
      throw new Error("Gagal mengambil data surat");
    }

    const result = await response.json();
    console.log("Nama Surat:", result.data.namaLatin);

  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    console.log("Proses selesai");
  }
}

fetchSurat(1);

fetchSurat("abc");
