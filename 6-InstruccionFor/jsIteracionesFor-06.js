function mostrar()
{
	var numeroIngresado;

	do {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	} while (numeroIngresado < 1 || isNaN(numeroIngresado));

	for (var base = 1; base < numeroIngresado; base++) {

		if (base %2 == 0) {
			console.log(base);
		}

	/*Otra forma

	for (var base = 2; base < numeroIngresado; base + = 2) {

		console.log(base);

		}
		
   **/
	}




}//FIN DE LA FUNCIÓN