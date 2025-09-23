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
      actualizarLista();
    }

    function agregarAmigo() {
      let input = document.getElementById("amigo");
      let amigoNuevo = input.value.trim();

      if (amigoNuevo === "") {
        alert("Por favor, escribe un nombre");
        return;
      }
      if (amigos.includes(amigoNuevo)) {
        alert("Ese nombre ya fue agregado");
        input.value = "";
        return;
      }

      amigos.push(amigoNuevo);
      input.value = "";
      actualizarLista();
    }

    function actualizarLista() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";
      amigos.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
      });
    }

    function sortearAmigo() {
      if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para sortear");
        return;
      }
      if (elegidos.length === amigos.length) {
        alert("Ya no hay más amigos disponibles");
        clean();
        return;
      }

      let indice;
      do {
        indice = Math.floor(Math.random() * amigos.length);
      } while (elegidos.includes(amigos[indice]));

      let elegido = amigos[indice];
      elegidos.push(elegido);
      document.getElementById("resultado").innerHTML =
        "🎉 Tu amigo secreto es: <b>" + elegido + "</b>";
    }
  </script>
</body>
</html>
