function mostrar ()
{
	//Ejercicio C // Mixing bandera
	var respuesta;
	var razaIngresada;
	var pesoIngresado;
	var temperaturaMedia;
	var edadIngresada;
	var estadoDeEspecie;
	var contadorAnimales;
	var acumuladorDeEdad;
	var promedioDeEdad;
	var BanderaPeso;
	var PesoMasAlto;
	var BanderaTemperatura;
	var temperaturaMaxima;

	respuesta = "si";
	contadorAnimales = 0;
	acumuladorDeEdad = 0;
	BanderaPeso = 0;
	PesoMasAlto = 0;
	BanderaTemperatura = 0;
	temperaturaMaxima = 0;

	while(respuesta == "si") {

		razaIngresada = prompt("Ingrese la raza del animal");

		pesoIngresado = prompt("Ingrese el peso");
		pesoIngresado = parseInt(pesoIngresado);
		while(isNaN(pesoIngresado) || peso < 1) {
			pesoIngresado = prompt("Error Ingrese el peso de nuevo");
			pesoIngresado = parseInt(pesoIngresado);
		}

		temperaturaMedia = prompt("Ingrese la temperatura media del lugar donde habita.");
		temperaturaMedia = parseInt(temperaturaMedia);
		while (isNaN(temperaturaMedia)) {
			temperaturaMedia = prompt("Error.Ingrese la temperatura de nuevo.");
			temperaturaMedia = parseInt(temperaturaMedia);
		}

		edadIngresada = prompt("Ingrese la edad");
		edadIngresada = parseInt(edadIngresada);
		while(edadIngresada < 0 || isNaN(edadIngresada)) {
			edadIngresada = prompt("Error ingrese la edad de nuevo");
			edadIngresada = parseInt(edadIngresada);
		}

		do{
			estadoDeEspecie = prompt("Ingrese si esta en peligro de extincion (si o no)");
		}while (estadoDeEspecie != "si" && estadoDeEspecie != "no");

		//PUNTO 2
		if(BanderaPeso === 0 ) {
			BanderaPeso++;
			PesoMasAlto = pesoIngresado;
			razaDelMasPesado = razaIngresada;
		}else {
			if (peso > PesoMasAlto) {
				PesoMasAlto = pesoIngresado;
				razaDelMasPesado = razaIngresada;
			}
		}

		//PUNTO 3
		if (BanderaTemperatura === 0 && estadoDeEspecie == "si") {
			BanderaTemperatura++;
			temperaturaMaxima = temperaturaMedia;
		}else{
			if (estadoDeEspecie == "si" && temperaturaMedia > temperaturaMaxima) {
				temperaturaMaxima = temperaturaMedia;
			}
		}


		//PUNTO 1
		acumuladorDeEdad += edadIngresada; 

		contadorAnimales++;

		respuesta = prompt("Ingrese ´si´ si quiere introducir otro animal");
	}

	promedioDeEdad = acumuladorDeEdad / contadorAnimales;

	console.log("El promedio de edad es: " + promedioDeEdad);
	console.log("La raza del más pesado es " + razaDelMasPesado);
	console.log("La temperatura maxima ingresada de los animales en extincion es " + temperaturaMaxima);



}//Fin de la funcion