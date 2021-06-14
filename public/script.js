const buscar = document.getElementById("buscar");

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
