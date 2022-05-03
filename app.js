const contenedorTareas = document.getElementById("tareas")
const btn = document.getElementById("btn-agregar")

btn.onclick = () =>{
    const tareaAgregar = document.getElementById("text-agregar").value;
    let div = document.createElement("div")
    let btn2 = document.createElement("button")
    btn2.textContent = "Quitar";
    div.textContent = tareaAgregar;
    div.classList.add("tarea")
    btn2.classList.add("btn")
    contenedorTareas.append(div)
    div.append(btn2)
    btn2.onclick = () =>{
        div.remove()
    }
}

