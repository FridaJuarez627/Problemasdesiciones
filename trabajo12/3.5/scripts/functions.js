function calcular(){

    let edad1 = parseFloat(document.getElementById("num1").value);
    let edad2 = parseFloat(document.getElementById("num2").value);
    let edad3 = parseFloat(document.getElementById("num3").value);

    let menor = edad1;

    if(edad2 < menor)
        { menor = edad2;}
    if(edad3 < menor)
        {menor = edad3;}
    
    document.getElementById("resul").textContent = "La menor edad es: " + menor + " años";

}