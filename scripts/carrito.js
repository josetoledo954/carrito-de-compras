const carrito = document.getElementsByClassName("carrito")
const template = document.getElementsByClassName("template")
const fragment = document.createDocumentFragment()
const botones = document.querySelectorAll("#btn")
const botonQuit = document.querySelectorAll("#boton", "button")

const carritoObjeto = []

const agregarAlCarrito = (e) => {
    const parent = e.target.parentNode
    // console.log(parent.children[1].innerText);
    // console.log(parent.children[2].innerText);
    
    const producto = {
        nombre: parent.children[1].innerText,
        precio: parseInt(parent.children[2].innerText),
        cantidad: 1
    }
    
    if (carritoObjeto.hasOwnProperty(producto.nombre)){
        producto.cantidad = carritoObjeto[producto.nombre].cantidad + 1
        producto.precio = carritoObjeto[producto.nombre].cantidad * producto.precio  + producto.precio
    }

    // carritoObjeto.push(producto)
    carritoObjeto[producto.nombre] = producto
    console.log(carritoObjeto);
   
 

    // const nombre = document.createElement("div")
    // nombre.innerText = producto.nombre
    // const name = document.getElementById("nombre")
    // name.appendChild(nombre)
    
    // const precio = document.createElement("div")
    // precio.innerText = producto.precio
    // const price = document.getElementById("precio")
    // price.appendChild(precio)
    
    // const cantidad = document.createElement("div")
    // cantidad.innerText = producto.cantidad
    // const canti = document.getElementById("cantidad")
    // canti.appendChild(cantidad)

    // const botonQuitar = document.createElement("button")
    // botonQuitar.innerText = "quitar"
    // const boton = document.getElementById("boton")
    // boton.appendChild(botonQuitar)

    carritoObjeto.forEach(producto => {
        template.querySelector("#nombre").textContent = producto.nombre

        const clone = template.cloneNode(true) 
    })
    template.apenChild(clone)
}


const quitarDelCarrito = (e) => {
    console.log(e.target);

    const parent = e.target.parentNode.parentNode
    
    const producto = {
        nombre: parent.children[0].innerText,
        precio: parent.children[1].innerText,
        cantidad: parent.children[2].innerText,
    }

    console.log(parent);
  
}

botones.forEach((btn) => btn.addEventListener
("click", agregarAlCarrito))

botonQuit.forEach((button) => button.addEventListener("click", quitarDelCarrito))


// enviar.onclick = e => {
//     e.preventDefault()
//     const parent = e.target.parentNode
//     console.log(parent.children[0].value);
//     console.log(parent.children[1].value);
//     console.log(this);
// }

// boton.addEventListener("click", () => {
//     const input = document.getElementById("entrada")
//     const nombreProducto = input.value 
//     const nuevoProducto = document.createElement ("li")
//     nuevoProducto.innerText = nombreProducto
//     const root = document.getElementById("root")
//     root.appendChild(nuevoProducto)
// })