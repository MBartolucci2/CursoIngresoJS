/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
// Matias Alegre Bartolucci, ejercicio 9
function mostrarAumento()
{ // sueldo+aumento= resultado
  // porcentaje de un valor=  multiplico el valor y lo divido por 100
	let sueldo;
   let resultado;
   let aumento;

   sueldo=parseFloat(document.getElementById("txtIdSueldo").value);
   
   aumento= sueldo * 10 / 100;

   resultado=sueldo + aumento;

   document.getElementById("txtIdResultado").value = resultado;
}
