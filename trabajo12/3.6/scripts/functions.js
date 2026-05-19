function calcular() {

    let precio = parseFloat(document.getElementById("num1").value);
    let descuento;

       if (precio >= 200) {descuento = precio * 0.15;}
    else 
        if (precio > 100) {descuento = precio * 0.12;} 
    else 
        {descuento = precio * 0.10;}

    let total = precio - descuento;

    document.getElementById("resul").textContent = "Descuento: $" + descuento + " Total: $" + total;

}