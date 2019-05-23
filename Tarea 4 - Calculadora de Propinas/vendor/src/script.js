function calcular(){
    var total, meseros, porcentaje, respuesta;

totaljs =  document.getElementById("total").value;
totaljs = parseFloat(totaljs);

porcentajejs = document.getElementById("porcentaje").value;
porcentajejs =parseFloat(porcentajejs);


meserosjs = document.getElementById("meseros").value;
meserosjs =parseFloat(meserosjs);


respuestajs = ((totaljs * porcentajejs) / 100) / meserosjs;

document.getElementById("respuesta").innerHTML="el "+porcentajejs
+"% de $"+totaljs+ " dividido en "+meserosjs+" meseros equivale a $"+respuestajs+" para cada mesero.";

}


function limpiar(){
document.getElementById("total").value="";
document.getElementById("meseros").value="";
document.getElementById("respuesta").innerHTML="Su Respuesta";
}