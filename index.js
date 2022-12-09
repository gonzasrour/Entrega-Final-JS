const divCards = document.querySelector(".cards");
const lista = document.querySelector("#lista");
const botonFiltrar = document.querySelector("#filtrar");
const botonFinalizarCompra = document.getElementById('compra')
const divProductos = document.querySelector('#divProductos')
const mostrarCategorias = async () => {

  const categoriasFetch = await fetch("categorias.json");
  const categoriasJson = await categoriasFetch.json();
  console.log(categoriasJson)
  categoriasJson.forEach((cat) => {
    const option = document.createElement("option");
    option.innerText = `${cat}`;
    lista.append(option);
  });
};

const buscarTodosProductos = async () => {
 
  const productoFetch = await fetch("productos.json");
  const productoJson = await productoFetch.json();
    console.log(productoJson);
  productoJson.forEach((prod) => {
    const { category, id, description, image, price, title } = prod;
    divCards.innerHTML += `
          <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5>${title}</h5>
          <p class="card-text">${description}</p>
          <p>${price}</p>
          <button id=${id}"toastify" class="btn btn-primary">AGREGAR PRODUCTO</button>
        </div>
      </div>
          `;
  });
};
const buscarProductosPorCategoria = async () => {
  const categoriaElegida = lista.value;
  divCards.innerHTML = '';
  
  const productoFetch = await fetch("productos.json");
  const productoJson = await productoFetch.json();
  console.log(productoJson);
  const productosFiltrados = productoJson.filter(
    (prod) => prod.category === categoriaElegida
  );
  productosFiltrados.forEach((prod) => {
    const { category, id, description, image, price, title } = prod;
    divCards.innerHTML += `
          <div class="card" style="width: 18rem;">
        <img src="${image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5>${title}</h5>
          <p class="card-text">${description}</p>
          <p>${price}</p>
          <button id=${id}"toastify" class="btn btn-primary ">AGREGAR PRODUCTO</button>
        </div>
      </div>
          `;
  });
};

buscarTodosProductos();
mostrarCategorias();
botonFiltrar.onclick = buscarProductosPorCategoria



botonFinalizarCompra.addEventListener("click", () => {
  
  Swal.fire ({
      title: "Esta seguro que desea finalizar la compra?",
      text: "Gracias por su compra",
      icon: "warring",
      confirmButtonText: "aceptar",
      background: "ffff"

  }) 
  
} 
)
   


