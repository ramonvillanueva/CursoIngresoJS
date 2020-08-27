function mostrar()
{
	var repeticiones;

	do {
		repeticiones = prompt("ingrese el número de repeticiones");
	    repeticiones = parseInt(repeticiones);
	} while (repeticiones < 1 || isNaN(repeticiones));// && solo se activa cuando ambas condiciones se cumplen mientras que || se activa mientras se cumpla una

	for (var contador = 0; contador < repeticiones; contador++ ) {
		alert("Hola UTN FRA");
	}

}//FIN DE LA FUNCIÓN