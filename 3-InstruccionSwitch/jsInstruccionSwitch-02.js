function mostrar()
{
	//tomo el mes
	let mesDelAño;
	
	mesDelAño = document.getElementById("txtIdMes").value;

	 switch (mesDelAño) 
	 {
		case "Junio":
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio")
		break;
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno")
		break;
		 default:
			 alert("Ya pasamos el frio ahora calor!!!.")
		break;
	 }




}//FIN DE LA FUNCIÓN