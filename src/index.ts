let producto = document.getElementById("producto");
let precio = document.getElementById("precio");
let agregar = document.getElementById("btn-agregar");
let calcular = document.getElementById("btn-calcular");
let lista = document.getElementById("lista");
let total = document.getElementById("total");
let vaciar = document.getElementById("vaciar");

/*arreglo string para cargar los productos, (vacío) sin cantidades*/

let productos: string[] = [];

/*arreglo number para cargar los precios, (vacío) sin cantidades*/

let precios: number[] = [];
/* arreglo para sumar el total*/
let suma: number = 0;

/*FUNCIÓN "const"- metodo push para agregar un elemento al final del arreglo (asignar evento), 
es decir: cuando haga clik al arreglo producto (línea 10), le vamos a pushear el valor ingresado al imput "Producto" */
const agregarAlCarrito = () => {
  //let miproducto : string = producto.value
  productos.push(producto.value);
  precios.push(Number(precio.value));

  lista?.innerHTML += `<li>${producto.value} : $${precio.value}</li>`;
  //vaciar los campos de entada
  producto.value = "";
  precio.value = "";
};

const calcularTotal = () => {
  suma = 0;
  for (let i: number = 0; i < precios.length; i++) {
    suma += Number(precios[i]);
  }
  //console.log(precios);
  total?.innerHTML = suma;
};

//const vaciarLista = () => {
//lista?.innerHTML = "";
//total.innerHTML = "";
//}

agregar?.addEventListener("click", agregarAlCarrito);
calcular?.addEventListener("click", calcularTotal);
vaciar?.addEventListener("click", vaciarLista);

//------------------------------

let producto = {
  id: 1,
  nombre: "leche",
  precio: 150
};
