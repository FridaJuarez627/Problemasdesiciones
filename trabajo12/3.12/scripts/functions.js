function calcular(){

    let horas = parseFloat(document.getElementById("num1").value);
    let pago = parseFloat(document.getElementById("num2").value);
    let sueldo = 0;

    if(horas > 50){document.getElementById("resul").textContent ="No está permitido trabajar más de 50 horas.";}
    else 
        if(horas <= 40){sueldo = horas * pago;document.getElementById("resul").textContent = "El sueldo semanal es: $" + sueldo;}
    else 
        if(horas <= 45){sueldo = (40 * pago) + ((horas - 40) * pago * 2);document.getElementById("resul").textContent ="El sueldo semanal es: $" + sueldo;}
    else
        {sueldo = (40 * pago) + (5 * pago * 2) + ((horas - 45) * pago * 3);document.getElementById("resul").textContent ="El sueldo semanal es: $" + sueldo;}

}