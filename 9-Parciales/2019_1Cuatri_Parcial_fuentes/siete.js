function mostrar()
{
	var altura;
	var sexo;
	//var contador;
	var acumuladorAlturas;
	var promedioAltura;

	var alturaBaja;
	var sexoBaja;
	var sexoCompleto;
	var bandera;

	var mujeresAltas;


	acumuladorAlturas = 0;

	mujeresAltas = 0;

	bandera = 0;

	//contador = 0;

	//while(contador < 5) {
	for (var contador = 0; contador < 5; contador++) {
		
		do {
			altura = prompt("Ingrese la altura");
			altura = parseInt(altura);
		} while (altura < 0 || altura > 250 || isNaN(altura));

		do {
			sexo = prompt("ingrese el sexo. 'm'para masculino, 'f' para fememnino");
		} while (sexo != "m" && sexo != "f");


		//Punto A
		acumuladorAlturas += altura; 


		//Punto B
		while (bandera < 1) {
			bandera++;
			alturaBaja = altura;
			sexoBaja = sexo;
		}
		if (altura < alturaBaja) {
			alturaBaja = altura;
			sexoBaja = sexo;
		}

		//Punto C

		if(sexo == "f" && altura > 190 ) {
			mujeresAltas++;
		}

		//contador++
		
	}

	//Punto A
	promedioAltura = acumuladorAlturas / 5;
	alert("El promedio de alturas es " + promedioAltura + " centimetros");

	//Punto B
	if (sexoBaja == "m") {
		sexoCompleto = "Masculino";
	} else {
		sexoCompleto = "Femenino";
	}
	alert("La altura mas baja es " + alturaBaja + " cm y su sexo es " + sexoCompleto);

	//Punto C
	alert(mujeresAltas + " mujeres superan los 190 cm");





}//Fin de la funcion