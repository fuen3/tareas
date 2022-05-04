const contenedorTareas = document.getElementById("tareas")
const btn = document.getElementById("btn-agregar")
let arrayTareas = [];
Local()
btn.onclick = () =>{
    if(arrayTareas === null){
        arrayTareas = []
    }
    else{
        const tareaAgregar = document.getElementById("text-agregar").value;
        arrayTareas.push(tareaAgregar)
        localStorage.setItem("tarea", JSON.stringify(arrayTareas));
        let div = document.createElement("div")
        let btn2 = document.createElement("button")
        btn2.textContent = "Quitar";
        div.textContent = tareaAgregar;
        div.classList.add("tarea")
        btn2.classList.add("btn")
        contenedorTareas.append(div)
        div.append(btn2)
        btn2.onclick = () =>{
        let temporal = tareaAgregar;
        arrayTareas = JSON.parse(localStorage.getItem("tarea"));
         let index = arrayTareas.indexOf(temporal)
        console.log(index)
        arrayTareas.splice(index,1)
        localStorage.setItem("tarea", JSON.stringify(arrayTareas));
        div.remove()
    }   
    }
}

function Local(){
    arrayTareas = JSON.parse(localStorage.getItem("tarea"))
    if(arrayTareas === null){
        arrayTareas = []
    }
    else{
        for (let index = 0; index < arrayTareas.length; index++) {
            const tareaAgregar = arrayTareas[index];
            let div = document.createElement("div")
            let btn2 = document.createElement("button")
            btn2.textContent = "Quitar";
            div.textContent = tareaAgregar;
            div.classList.add("tarea")
            btn2.classList.add("btn")
            contenedorTareas.append(div)
            div.append(btn2)
            btn2.onclick = () =>{
                let temporal = tareaAgregar;
                arrayTareas = JSON.parse(localStorage.getItem("tarea"));
                 let index = arrayTareas.indexOf(temporal)
                console.log(index)
                arrayTareas.splice(index,1)
                localStorage.setItem("tarea", JSON.stringify(arrayTareas));
                div.remove()
            }
        }
    }
}

