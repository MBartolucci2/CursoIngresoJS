//Alegre Bartolucci Matias, ejercicio 10


function mostrar()
{

	let mensaje;
	let notaRamdon;
	
	notaRamdon = Math.floor(Math.random() * 10) + 1;  
    
	if (notaRamdon > 8)
	{
	 mensaje = " EXCELENTE tu nota es " + notaRamdon;
	}
	else
	{
      
	if(notaRamdon > 3)
	{
     mensaje = " APROBO tu nota es un " + notaRamdon;
	}

    else
	{
     mensaje = " Vamos, la proxima se puede";
	}

    }
alert (mensaje);

}//FIN DE LA FUNCIÓN