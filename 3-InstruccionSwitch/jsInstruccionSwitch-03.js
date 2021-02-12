// Alegre Bartolucci Matias ejercicio 3 if

function mostrar()
{
	let mes;
	mes = document.getElementById("txtIdMes").value;
	switch (mes) 
	{
		case "Febrero":
		alert(" Este mes no tiene mas de 29");
		break;
		default:
		alert(" Este mes tiene 30 dias o mas");	
	}
	}//FIN DE LA FUNCIÓN