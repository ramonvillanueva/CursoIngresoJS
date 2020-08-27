function mostrar()
{
	var numeroIngresado

	do {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
	} while (numeroIngresado < 1 || isNaN(numeroIngresado));

	for (var i = 2; i < numeroIngresado; i++) {
		if(numeroIngresado % i == 0) {
			console.log(i);
		}
	}


}//FIN DE LA FUNCIÓN