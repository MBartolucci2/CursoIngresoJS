function mostrar()
{
	let edad;
	let civil;
	//tomo la edad  
	edad= parseInt(document.getElementById("txtIdEdad").value);
	civil= (document.getElementById("estadoCivil").value);

	if (edad >=18 && civil == "Soltero") 
	{
		alert("Es soltero y no es menor")
	}



}//FIN DE LA FUNCIÓN