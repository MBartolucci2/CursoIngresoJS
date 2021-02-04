/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
// Matias Alegre Bartolucci, ejercicio 7
function sumar()
{	
	//variables
	let numeroUno;
	let numeroDos;
	let resultado;
	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	alert(resultado)
}

function restar()
{
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	
	resultado=numeroUno-numeroDos;

	alert(resultado);
}

function multiplicar()
{ 
	let numeroUno;
	let numeroDos;
	let resultado;

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;
	
	alert(resultado);
	
}

function dividir()
{
	let numeroUno
	let numeroDos
	let resultado

	numeroUno=document.getElementById("txtIdNumeroUno").value;
	numeroDos=document.getElementById("txtIdNumeroDos").value;
	
	numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
	
	resultado=numeroUno/numeroDos;

	alert(resultado);
}

