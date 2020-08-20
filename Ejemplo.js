function saludo(){
    var mensaje; 
    var opcion = prompt("hola","ingresa tu nombre"); 

    if (opcion == null || opcion == ""){
        mensaje= "Intenta nuevamente"; 
    }else{
        mensaje="Hola "+opcion; 
    }
    document.getElementById("ejemplo").innerHTML=mensaje; 
}
