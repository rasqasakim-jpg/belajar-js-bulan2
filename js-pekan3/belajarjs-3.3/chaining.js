const hitung = new Promise((resolve) => {
    setTimeout(() => resolve(5), 2000)
})

hitung
 .then(j => {
    console.log("langkah 1:", j)
    return j * 2
 })
 .then(j => {
    console.log("langkah 2:", j)
    return j + 10
 })
 .then(j => {
    console.log("langkah 3:", j)
    return j * 2
 })
 .then(j => {
    console.log("langkah 4", j)
 })
 .catch(e => console.log("error", e))
 .finally(() => console.log("berhasil hitung"))