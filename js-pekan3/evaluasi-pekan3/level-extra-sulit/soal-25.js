async function hitungTodo() {
    try {
       const res = await fetch("https://jsonplaceholder.typicode.com/todos");
       const data = await res.json(); 
       const cariBenar = data.filter(t => t.completed === true);
       console.log(cariBenar.length);
       console.log(cariBenar)
    } catch (error) {
        console.error("Terjadi error:", error);
    }
}
hitungTodo()
