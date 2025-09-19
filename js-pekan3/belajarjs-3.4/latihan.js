function getProduct() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("nama: laptop, harga: 5000000");
        }, 2000);
    });
}
async function productShow() {
    const data = await getProduct();
    console.log("data:", data );
}
productShow();