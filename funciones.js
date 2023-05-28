function encriptar() {
    let texto = document.getElementById("area-encriptado").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");


    let textoCifrado = texto
                        .replace("e", "enter")
                        .replace("i", "imes")
                        .replace("a", "ai")
                        .replace("o", "ober")
                        .replace("u", "ufat");

    if(texto.length != 0){
        document.getElementById("area-encriptado").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        munieco.src = "./imagenes/encriptado.jpg";
    } else {
        munieco.src = "./imagenes/Muñeco.png";
        tituloMensaje.textContent = "No se encontro ningún mensaje"
        parrafo.textContent = "Ingrese texto a Encriptar o Desencriptar";
        alert("Ingrese algún texto");
    }   
}               

function desencriptar(){
    let texto = document.getElementById("area-encriptado").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let munieco = document.getElementById("munieco");

    let textoCifrado = texto
                        .replace("enter", "e")
                        .replace("imes", "i")
                        .replace("ai", "a")
                        .replace("ober", "o")
                        .replace("ufat", "u");
    
    if(texto.length != 0){
        document.getElementById("area-encriptado").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        munieco.src = "./imagenes/desencriptado.jpg";
    } else {
        munieco.src = "./imagenes/Muñeco.png";
        tituloMensaje.textContent = "No se encontro ningún mensaje"
        parrafo.textContent = "Ingrese texto a Encriptar o Desencriptar";
        alert("Ingrese algún texto");
    }   
}

function copiar(){
    var contenido = document.getElementById("area-encriptado");
    contenido.select();
    document.execCommand('copy');
    
    alert("Texto copiado exitosamente");
}

