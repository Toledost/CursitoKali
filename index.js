function cargarPersonaje(){
    let users = getDatos();
    if(users){
        console.log(users)
    }
    let div = document.getElementById("div-container")

    let textoTarjeta = document.createElement("h6");

    let texto = "nombre: "

    let iconoPersonaje = document.createElement("img"); 
    iconoPersonaje.setAttribute("src", "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png")
    iconoPersonaje.setAttribute("class", "icono");

    let tarjeta = document.createElement("div") // donde van a cargarse los personajes
    tarjeta.setAttribute("class", "tarjeta");

    div.appendChild(tarjeta);
    tarjeta.appendChild(textoTarjeta)
    tarjeta.appendChild(iconoPersonaje)
    textoTarjeta.innerHTML = texto
}

async function getDatos(){
     var users = await fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    // .then(json => console.log(json))
                    
    return users
}



