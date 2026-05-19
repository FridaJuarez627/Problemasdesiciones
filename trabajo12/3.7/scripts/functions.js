function calcular() {

    let edad = parseFloat(document.getElementById("num1").value);
    let promedio = parseFloat(document.getElementById("num2").value);

    if (edad > 18) {
        if (promedio >= 9) { resultado = "La beca es de 2000";} 
     else 
        if (promedio >= 7.5) {resultado = "La beca es de 1000";} 
     else 
        if (promedio >= 6) {resultado = "La beca es de 500";} 
     else 
        {resultado = "Recibira una carta de invitacion";}
    } 
    else 
    {
        if (promedio >= 9) {resultado = "La beca es de 3000";}
     else 
        if (promedio >= 8) {resultado = "La beca es de 2000";} 
     else 
        if (promedio >= 6) {resultado = "La beca es de 100";} 
     else 
        {resultado = "Recibira una carta de invitacion";}
    }

    document.getElementById("resul").textContent = resultado;

}