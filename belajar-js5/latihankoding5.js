// di function yang telah saya pelajari ada 3 medote:
// 1.function deklaratif
// 2.function ekspresi
// 3.arrow function

// =============== 1. ========================
// deklaratif

//1. contoh kasus pertama
function cekGenapGanjil(angka) {
    if (angka % 2 == 0) {
        return `${angka} adalah genap`;
    } else {
        return `${angka} adalah ganjil`;

    }
}
console.log(cekGenapGanjil(10))
console.log(cekGenapGanjil(11))

//2. contoh kasus kedua
function totalHafalan(Arrhafalan) {
    let total = 0;
    for (let i = 0; i < Arrhafalan.length; i++) {
        total += Arrhafalan[i];
    }
    return `total hafalan mingguan ${total} ayat;`
}

console.log(totalHafalan([10, 20, 30]));

// ==================================

// ekspresi

// 1.contoh kasus pertama
const cekPassword = function(password) {
    if (password === "2345")
        return `password benar`
    else
        return `password salah`

}
console.log(cekPassword("2345"));
console.log(cekPassword("1234"));

//2.contoh kasus kedua
const rataRata = function(nilaiArr) {
    let total = 0
    for (let i = 0; i < nilaiArr.length; i++)
        total += nilaiArr[i]
    return total / nilaiArr.length
} 
console.log(rataRata([80, 90, 70]));

// Cara kerja:

// arr = [80, 90, 70]

// total = 0

// Loop:

// total = 0 + 80 → 80

// total = 80 + 90 → 170

// total = 170 + 70 → 240

// Panjang array (arr.length) = 3

// Rata-rata = 240 / 3 = 80

// ==============================

// Arrow function

//1. contoh kasus pertama
const luasPersegi = (sisi) => sisi * sisi;

console.log(luasPersegi(5));

//2. contoh kasus kedua

const sapa = (nama) => `halo, ${nama}`;

console.log(sapa("budi"));
console.log(sapa("ani"));

// ================ 2. ======================

// 1 kasus pertama

function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

//2 kasus kedua

function createStorage() {
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        getAll: function() {
            return data;
        }
    };
}

const storage = createStorage();
storage.add("apel");
storage.add("jeruk");
console.log(storage.getAll()); // ["apel", "jeruk"]

// 3 kasus ketiga

function createAdder(x) {
    return function(y) {
        return x + y;
    }
}

const add5 = createAdder(5);
console.log(add5(10)); // 15
console.log(add5(3));  // 8

// 4 kasus ke empat

function runOnce(fn) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            return fn();
        } else {
            return "Function already called!";
        }
    }
}

const sayHello = runOnce(() => "Hello!");
console.log(sayHello()); // "Hello!"
console.log(sayHello()); // "Function already called!"

// 5 kasus ke lima

function memoFactorial() {
    const cache = {};
    return function factorial(n) {
        if (n in cache) return cache[n];
        if (n <= 1) return 1;
        cache[n] = n * factorial(n - 1);
        return cache[n];
    }
}

const fact = memoFactorial();
console.log(fact(5)); // 120
console.log(fact(6)); // 720, otomatis menggunakan cache

// =================== 3. ====================

//  1. menyimpan dan menampilkan daftar barang

const products = [
    { name: "Kaos", price: 75000 },
    { name: "Celana", price: 150000 },
    { name: "Jaket", price: 200000 }
];

products.forEach(item => {
    console.log(`${item.name} harganya Rp${item.price}`);
});

//  2. mencari barang berdasarkan nama

function findPrice(productName) {
    const products = [
        { name: "Kaos", price: 75000 },
        { name: "Celana", price: 150000 },
        { name: "Jaket", price: 200000 }
    ];
    const found = products.find(item => item.name === productName);
    return found ? found.price : "Barang tidak ditemukan";
}

console.log(findPrice("Celana")); // 150000
console.log(findPrice("Topi"));   // Barang tidak ditemukan

//  3. menghitung total belanja

const cart = [
    { name: "Kaos", price: 75000, qty: 2 },
    { name: "Celana", price: 150000, qty: 1 },
    { name: "Jaket", price: 200000, qty: 1 }
];

const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(`Total belanja: Rp${total}`);

//  4. memfilter nilai pelajar

const students = [
    { name: "Wahyu", score: 90 },
    { name: "Umar", score: 85 },
    { name: "Budi", score: 70 }
];

const passed = students.filter(student => student.score > 80);
console.log(passed.map(s => s.name)); // ["Wahyu", "Umar"]

//  5. mengelompokkan data sesuai kategori

const items = [
    { name: "Kaos", category: "Pakaian" },
    { name: "Celana", category: "Pakaian" },
    { name: "Sabun", category: "Kebutuhan" }
];

const grouped = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item.name);
    return acc;
}, {});

console.log(grouped);
// ===========================================================




