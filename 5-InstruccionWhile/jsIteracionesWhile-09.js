/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="primero";
	respuesta='si';
	while(respuesta=="si")
	{
		do {
			numeroIngresado = prompt("Ingrese el numero");
		    numeroIngresado = parseInt(numeroIngresado);
		} while (isNaN(numeroIngresado));

		if (banderaDelPrimero == "primero") {
			banderaDelPrimero = "ya no es el primero";

			numeroMaximo = numeroIngresado;
			numeroMaximo = parseInt(numeroMaximo);

		    numeroMinimo = numeroIngresado;
			numeroMinimo = parseInt(numeroMinimo);

		}else {
			if(numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
				numeroMaximo = parseInt(numeroMaximo);
			}
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado
				numeroMinimo = parseInt(numeroMinimo)
			}
		}
		
		respuesta=prompt("desea continuar?");
	}
	
	
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}//FIN DE LA FUNCIÓN