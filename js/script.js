let cargarCanciones = async () => {
    try {
        console.log("test");
        let respuesta = await fetch("https://my-json-server.typicode.com/ridoansaleh/my-music-api/songs");
        const data = await respuesta.json();

        let elementoLista = document.getElementById("songList");
        data.forEach(element => {
            elementoLista.innerHTML+=`<div class="songItem">
                <img></img>
                <div>
                    <h2>` + element.title + `</h2>
                    <sub>` + element.singer+`</sub>
                </div>
            </div>`
            console.log(element);
        });
    }
    catch(error){

    }
}

cargarCanciones();