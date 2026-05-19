function calcular(){

    let anios = parseFloat(document.getElementById("num1").value);
    let bono;

    if(anios > 5){ bono = 1000;}
 else
    {bono = anios * 100;}

    document.getElementById("resul").textContent = "El bono que recibirá es: $" + bono;

}