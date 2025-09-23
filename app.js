<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Amigo Secreto</title>
</head>
<body>
  <h1>Juego: Amigo Secreto</h1>

  <input type="text" id="amigo" placeholder="Escribe un nombre">
  <button type="button" onclick="agregarAmigo()">Agregar</button>
  <button type="button" onclick="sortearAmigo()">Sortear</button>
  <button type="button" onclick="clean()">Reiniciar</button>

  <h3>Lista de amigos:</h3>
  <ul id="listaAmigos"></ul>

  <h3 id="resultado"></h3>

  <script>
    let amigos = [];
    let elegidos = [];

    function clean() {
      amigos = [];
      elegidos = [];
      document.getElementById("resultado").innerHTML = "";
      listaAmigos();
    }

    function agregarAmigo() {
      let amigoNuevo = document.getElementById("amigo").value;
      if (amigoNuevo === "") {
        alert("Por favor, inserte un nombre");
      } else {
        amigos.push(amigoNuevo);
        document.querySelector("#amigo").value = "";
      }
      listaAmigos();
    }

    function listaAmigos() {
      let lista = document.querySelector("#listaAmigos");
      lista.innerHTML = "";
      for (let i = 0; i < amigos.length; i++) {
        let amigoHTM = document.createElement("li");
        amigoHTM.innerHTML = amigos[i];
        lista.appendChild(amigoHTM);
      }
    }

    function sortearAmigo() {
      if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear");
        return;
      }
      let indice = Math.floor(Math.random() * amigos.length);
      if (elegidos.length == amigos.length) {
        alert("Ya no hay mas amigos para sortear");
        clean();
        return;
      }
      if (elegidos.includes(amigos[indice])) {
        return sortearAmigo();
      } else {
