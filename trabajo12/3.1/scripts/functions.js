function calcular() {

    let edad = parseFloat(document.getElementById("num1").value);

    if (edad >= 18) {
        document.getElementById("resul").textContent = "La persona sí puede votar.";} 
 else 
    
        document.getElementById("resul").textContent = "La persona no puede votar.";
    
}