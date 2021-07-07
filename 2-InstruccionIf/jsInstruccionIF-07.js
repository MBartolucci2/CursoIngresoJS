function mostrar()
{
	let edad;
	let civil;
	//tomo la edad  
	edad= parseInt(document.getElementById("txtIdEdad").value);
	civil= (document.getElementById("estadoCivil").value);

	if (edad < 18 && civil != "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero")	
	}
	


}//FIN DE LA FUNCIÓN