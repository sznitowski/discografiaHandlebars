const express = require("express");
const expHbs = require("express-handlebars");
const path = require("path");
const app = express();
const discos = require("./discos.json");

app.engine("handlebars", expHbs({
    defaultLayout: "main-layout",
    layoutsDir: "views/layouts",
  })
);

app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home", { titulo: "home" });
});

app.get("/buscar", (req, res) => {
  const artista = req.query.artista || "";
  const titulos = req.query.titulos || "";
  const lanzamiento = req.query.launch || "";
  let resultado = discos.discos;
    
  if (artista) {
    resultado = resultado.filter(elemento => elemento.artista.toLowerCase().includes(artista));  
    }
  if (titulos) {
    resultado = resultado.filter(elemento => elemento.titulo.toLowerCase().includes(titulos));  
    
    }
  if (lanzamiento) {
    resultado = resultado.filter(elemento => elemento.lanzamiento.includes(lanzamiento));
    }
    /* res.json(listaDiscos); */

      res.render("tarjetas", {
      discos: resultado,
  }); 
  });

app.listen(3000, () => {
  console.log("Server running, PORT: 3000");
});