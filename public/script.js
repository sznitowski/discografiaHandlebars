const buscar = document.getElementById("buscar");

/* const tarjetas = document.getElementById("tarjetas"); */

buscar.addEventListener("click", () => {
  const artista = document.getElementById("artista").value;
  const titulo = document.getElementById("titulo").value;
  const lanzamiento = document.getElementById("lanzamiento").value;
  let filter = "";
  if (artista) {
    filter += (filter ? "&" : "") + `artista=${artista}`;
  }
  if (titulo) {
    filter += (filter ? "&" : "") + `titulo=${titulo}`;
  }
  if (lanzamiento) {
    filter += (filter ? "&" : "") + `lanzamiento=${lanzamiento}`;
  }
  window.location.href = `/buscar?${filter}`;
});
/* 
const Buscar = document.getElementById("buscar");
const inputNombre = document.getElementById("artista");

Buscar.addEventListener("click", function() {
  window.location.href = "/buscar?nombre=" + artista.value;
}); */
