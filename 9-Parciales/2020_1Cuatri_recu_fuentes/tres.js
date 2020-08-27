function mostrar()
{
	//alert("tres");
	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var respuesta;

	var banderaTemperatura;
	var temperaturaMasAlta;
	var nacionalidadTemperatura;

	var contadorSolteros = 0;

	var MujeresSolterasViudas = 0;

	var ContadorTerceraEdad = 0;

	var acumuladorEdadMujeres = 0;
	var cantidadMujeresCasadas = 0;
	var promedio;



	banderaTemperatura = 0;
	temperaturaMasAlta = 0;

	respuesta = "si";



	while (respuesta == "si") {
		nombre = prompt("Ingrese el nombre");

		nacionalidad = prompt("Ingrese nacionalidad");

		do {
			edad = prompt("Ingrese edad.");
			edad = parseInt(edad);
		} while (edad < 1 || isNaN(edad));

		do {
			sexo = prompt("Ingrese sexo. 'f' para femenino o 'm' para masculino");
		} while (sexo != "m" && sexo != "f");

		do {
			estadoCivil = prompt("Ingrese estado civil");
		} while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo");

		do {
			temperatura = prompt("Ingrese temperatura corporal");
			temperatura = parseInt(temperatura);
		} while (isNaN(temperatura));

		//Punto A Este hay que arreglarlo creo que tengo que darle vuelta
		if (banderaTemperatura < 1) {
			banderaTemperatura++;//Esto va siempre al principio
			temperaturaMasAlta = temperatura;
			nacionalidadTemperatura = nacionalidad;
			
		}else {
			if (temperatura > temperaturaMasAlta) {
				temperaturaMasAlta = temperatura;
				nacionalidadTemperatura = nacionalidad;
			}
		}
		

		//Punto B
		if (edad > 17 && estadoCivil == "soltero") {
			contadorSolteros++;
		}

		//Punto C
		if(sexo == "f" && estadoCivil != "casado") {
			MujeresSolterasViudas++;
		}

		//Punto D
		if (edad > 60 && temperatura > 38) {
			ContadorTerceraEdad++;
		}

		//Punto E
		if (sexo == "f" && estadoCivil == "casado") {
			acumuladorEdadMujeres += edad;
			cantidadMujeresCasadas ++;
		}
		promedio = acumuladorEdadMujeres / cantidadMujeresCasadas;
		promedio = parseInt(promedio);

		console.log(nacionalidad);
	    console.log(contadorSolteros);
	    console.log(MujeresSolterasViudas);
	    console.log(ContadorTerceraEdad + " personas de la tercera edad, tiene mas de 38 de temperatura");
	    console.log("El promedio de edad entre mujeres casadas es " + promedio );

		respuesta = prompt("Si quiere ingresar a otra persona ingrese ´si´ ");


	
	}

	console.log(nacionalidad);
	console.log(contadorSolteros);
	console.log(MujeresSolterasViudas);
	console.log(ContadorTerceraEdad + " personas de la tercera edad, tiene mas de 38 de temperatura");
	console.log("El promedio de edad entre mujeres casadas es " + promedio );



	
}
// parcial 2019 para mañana
