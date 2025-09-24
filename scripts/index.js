const btn = document.getElementById("testDom")
const div = document.getElementById("testDiv")

const getTodos = async() => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todoees")
        console.log(res.status, res.ok)
        if(!res.ok) {
            throw new Error("Erreur lors de la récupération des todos")
        }
        const data = await res.json()
        console.log(data)
        data.forEach(todo => {
            const p = document.createElement("p")
            p.textContent = todo.title
            div.appendChild(p)
        })
    } catch(err) {
        const p = document.createElement("p")
        p.textContent = "Une erreur est survenue..."
        div.appendChild(p)
        console.log(err)
    }
}

btn.addEventListener("click", () => {
    // btn.textContent = "test2" + new Date().toLocaleDateString()
    // const p = document.createElement("p")
    // p.textContent = new Date()
    // div.appendChild(p)
    getTodos()
})
console.log(btn)
