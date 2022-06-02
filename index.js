function cargarPersonaje(users){
    console.log(users)
    var cantUsers = (Object.keys(users)).length

    for (var i = 0; i< cantUsers; i++){
        
        let div = document.getElementById("div-container")
    
        let textoTarjeta = document.createElement("h6");
        textoTarjeta.setAttribute("class", "texto");
    
        let textoNombre = "Nombre: " + users[i].name; 
        let textoEmail = "Email: " + users[i].email;
        let textoPhone = "Telefono: " + users[i].phone;
        let textoCity = "Ciudad: " + users[i].address.city;
    
        let iconoPersonaje = document.createElement("img"); 
        iconoPersonaje.setAttribute("src", "https://i.pinimg.com/originals/0c/3b/3a/0c3b3adb1a7530892e55ef36d3be6cb8.png")
        iconoPersonaje.setAttribute("class", "icono");
    
        let tarjeta = document.createElement("div") // donde van a cargarse los personajes
        tarjeta.setAttribute("class", "tarjeta");
    
        div.appendChild(tarjeta);
        tarjeta.appendChild(textoTarjeta)
        tarjeta.appendChild(iconoPersonaje)
        textoTarjeta.innerHTML = textoNombre + textoEmail + textoPhone + textoCity
    }
}

function getDatos(){
    var users = fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(usuarios => cargarPersonaje(usuarios))
}
