function calcular(){

    let tipo = document.getElementById("num1").value.toUpperCase();
    let alcohol = parseFloat(document.getElementById("num2").value);
    let lentes = parseFloat(document.getElementById("num3").value);
    let enfermedad = parseFloat(document.getElementById("num4").value);
    let edad = parseFloat(document.getElementById("num5").value);

    let base;
    let cargo = 0;

       if(tipo == "A"){ base = 1200;}
    else
        {base = 950;}
       if(alcohol == 1){cargo = cargo + (base * 0.10);}
       if(lentes == 1){cargo = cargo + (base * 0.05);}
       if(enfermedad == 1){cargo = cargo + (base * 0.05);}
       if(edad > 40){cargo = cargo + (base * 0.20);}
    else
        {cargo = cargo + (base * 0.10);}

    let total = base + cargo;
    
    document.getElementById("resul").textContent ="El costo del seguro es: " + total;

}