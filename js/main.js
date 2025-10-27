const productos = [
    {nombre: "Detergente líquido 3L", precio: 3500, img: "images/producto1.jpg"},
    {nombre: "Cloro gel 1L", precio: 2200, img: "images/producto2.jpg"},
    {nombre: "Limpiador multiuso 900ml", precio: 1500, img: "images/producto3.jpg"},
    {nombre: "Jabón líquido manos 500ml", precio: 1200, img: "images/producto4.jpg"},
    {nombre: "Desinfectante spray 500ml", precio: 1800, img: "images/producto5.jpg"},
    {nombre: "Escobilla para baño", precio: 2500, img: "images/producto6.jpg"},
    {nombre: "Paño de microfibra", precio: 800, img: "images/producto7.jpg"},
    {nombre: "Guantes de limpieza", precio: 900, img: "images/producto8.jpg"},
    {nombre: "Lavalozas concentrado 1L", precio: 2000, img: "images/producto9.jpg"},
    {nombre: "Ambientador 300ml", precio: 1200, img: "images/producto10.jpg"}
];

let carrito = [];

function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    productos.forEach((prod, i) => {
        const div = document.createElement("div");
        div.className = "producto";
        div.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>Precio: $${prod.precio}</p>
            <button onclick="agregarCarrito(${i})">Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
}

function agregarCarrito(index) {
    carrito.push(productos[index]);
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    lista.innerHTML = "";
    let suma = 0;
    carrito.forEach((prod, i) => {
        suma += prod.precio;
        const li = document.createElement("li");
        li.textContent = `${prod.nombre} - $${prod.precio} `;
        const btn = document.createElement("button");
        btn.textContent = "Quitar";
        btn.onclick = () => {
            carrito.splice(i, 1);
            actualizarCarrito();
        };
        li.appendChild(btn);
        lista.appendChild(li);
    });
    total.textContent = suma;
}

document.getElementById("checkout").addEventListener("click", () => {
    if(carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    let mensaje = "Hola, quiero hacer un pedido:\n";
    carrito.forEach(prod => {
        mensaje += `- ${prod.nombre} $${prod.precio}\n`;
    });
    mensaje += `Total: $${carrito.reduce((a,b)=>a+b.precio,0)}\n`;
    mensaje += "Pago al entregar: efectivo o transferencia\n";
    mensaje += "Comuna: San Miguel\n";
    mensaje += "Nombre: \nTeléfono: \nDirección: \n";

    const url = `https://wa.me/56998895458?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});

mostrarProductos();
