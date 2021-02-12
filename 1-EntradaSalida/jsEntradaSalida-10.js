/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
// Matias Alegre Bartolucci
function mostrarAumento()
{
  let importe;
  let descuento;
  let importeFinal;
  
  importe = parseInt(document.getElementById("txtIdImporte").value);

  descuento = importe * 25 / 100;

  importeFinal = importe - descuento;  

   document.getElementById("txtIdResultado").value = importeFinal
}