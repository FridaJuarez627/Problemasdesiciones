function calcular(){

    let dinero = parseFloat(document.getElementById("num1").value);
    let costoKm = parseFloat(document.getElementById("num2").value);

    let mexico = 750 * 2 * costoKm;
    let puertoVallarta = 800 * 2 * costoKm;
    let acapulco = 1200 * 2 * costoKm;
    let cancun = 1800 * 2 * costoKm;
    let destino;

    if(dinero >= cancun){destino = "Cancún";}
 else 
    if(dinero >= acapulco){destino = "Acapulco";}
 else 
    if(dinero >= puertoVallarta){destino = "Puerto Vallarta";}
 else 
    if(dinero >= mexico){destino = "México";}
 else
    {destino = "Debe quedarse en casa";}

    document.getElementById("resul").textContent = "Destino recomendado " + destino;

}