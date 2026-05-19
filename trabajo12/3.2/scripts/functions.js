function calcular() {

    let horas = parseFloat(document.getElementById("num1").value);
    let pago = parseFloat(document.getElementById("num2").value);
    let sueldo;

      if (horas <= 40) {sueldo = horas * pago;} 
    else 
        {
    let extras = horas - 40;
        sueldo = (40 * pago) + (extras * pago * 2);
    }

    document.getElementById("resul").textContent = "El sueldo semanal es: $" + sueldo;

}