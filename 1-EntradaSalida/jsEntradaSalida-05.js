/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
//Matias Alegre Bartolucci, ejercicio 5 bis

function mostrar()
{	//variables
	let nombre;
	let edad;
	let apellido; 
	
	nombre=document.getElementById("txtIdNombre").value;

	apellido=prompt("Inserte su apellido");

	edad=document.getElementById("txtIdEdad").value;
	
	alert(apellido + ", Usted se llama " + nombre + " y tiene " + edad + " años ");
}



