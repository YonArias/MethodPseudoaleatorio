const myButton = document.getElementById("calcular");

// Obtener el elemento de audio
const audio = document.createElement("audio");
audio.src = "./src/song_button.mp3";

audio.load();

myButton.addEventListener("click", function() {
  // Reproducir el audio
  audio.play();
});

function BlumBlum(){
    // Obteniendo los datos
    var a = parseInt(document.getElementById("value-a").value)
    var b = parseInt(document.getElementById("value-b").value)
    var c = parseInt(document.getElementById("value-c").value)

    var seed = parseInt(document.getElementById("value-seed").value)
    var modulo = parseInt(document.getElementById("value-modulo").value)

    // Desarrollo
    var data = []
    var new_seed = seed
    do {
        var result = a*(new_seed**2) + b*new_seed + c;
        var residuo = result % modulo
        var ri = (residuo / modulo).toFixed(4)

        data.push([new_seed, result, residuo, ri])

        new_seed = residuo
    } while ((new_seed != seed && new_seed != result) && data.length < modulo*2)
    // Mostrando los datos
    // LLamado a la etiqueta tbody
    var tbody = document.getElementById("container-content")

    data.forEach(iteracion => {
        var tr = document.createElement("tr") // creamos la etiquera
        // Creamos el index
        var td = document.createElement("td")
        td.textContent = data.indexOf(iteracion)+1 // agregamos contenido
        // ****
        td.className = "px-6"
        td.className += " py-3"
        // ****
        tr.appendChild(td) // unimos a la etiqueta
        // fin index
        iteracion.forEach(element => {
            var td = document.createElement("td")
            td.textContent = element // agregamos contenido
            // ****
            td.className = "px-6"
            td.className += " py-4"
            // ****
            tr.appendChild(td) // unimos a la etiqueta
        });

        // ****
        tr.className = "bg-white"
        tr.className += " border-b"
        tr.className += " dark:bg-gray-800"
        tr.className += " dark:border-gray-700"
        // ****

        if(data.indexOf(iteracion) == 0){
            tbody.replaceChildren(tr) // borramos el anterior contenido
        }else {
            tbody.appendChild(tr)
        }
    });
}