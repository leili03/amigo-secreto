let listaDeAmigos = [];

function agregarAmigo() {
 
    let amigoInput = document.getElementById('amigo');
    let amigoNombre = amigoInput.value;
    
    if (amigoNombre.trim() === '') {
        alert('introduce un nombre valido por favor!');
        return;
    } 
     listaDeAmigos.push(amigoNombre);

     let listaHtml = document.getElementById('listaAmigos');
     
     listaHtml.innerHTML = '';

     for (let i = 0; i < listaDeAmigos.length; i++){
        let li =document.createElement('li');
        li.textContent = listaDeAmigos[i]
        listaHtml.appendChild(li)
     }

     amigoInput.value = ''
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert('es necesario al menos 2 amigos para realizar el sorteo.');
        return
    }
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    let amigoSecreto = listaDeAmigos[indiceAleatorio];

    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSecreto}!!!`
}
function reiniciar() {
  
  listaDeAmigos = [];

  document.getElementById('listaAmigos').innerHTML = '';
  
  document.getElementById('resultado').textContent = '';

  document.getElementById('amigo').value = '';
}
