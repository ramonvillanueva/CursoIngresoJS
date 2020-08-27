/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var numeroLegajo;
 	var nacionalidad;


 	edadIngresada = prompt("Ingrese su edad");
 	edadIngresada = parseInt(edadIngresada);
 	while (isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90) {
 		edadIngresada = prompt("Ingrese su edad");
 		edadIngresada = parseInt(edadIngresada);
 	}

 	sexoIngresado = prompt("Ingrese su sexo"); 
 	if (sexoIngresado == "M") {
 		txtIdSexo.value = "Masculino";
 	}
 	if else (sexoIngresado == "F") {
 		txtIdSexo.value = "Femenino"
 	}
 	while (!(sexoIngresado == "M" && sexoIngresado == "F" )) {
 		sexoIngresado = prompt("Ingrese su sexo");
 	}

 	estadoCivilIngresado = prompt("Ingrese su estado civil"); 
 	estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	switch(estadoCivilIngresado) {
 		case 1: 
 			txtIdEstadoCivil.value = "Soltero";
 		case 2: 
 		    txtIdEstadoCivil.value = "Casado";
 		case 3:
 			txtIdEstadoCivil.value = "Divorciado";
 		case 4:
 			txtIdEstadoCivil.value = "Viudo";
 	}	
 	while (!(estadoCivilIngresado > 0 && estadoCivilIngresado < 5)) {
 		estadoCivilIngresado = prompt("Ingrese su estado civil");
 		estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	}

 	sueldoBruto = prompt("Ingrese su sueldo bruto");
 	sueldoBruto = parseInt(sueldoBruto);
 	while (sueldoBruto < 8000) {
 		sueldoBruto = prompt("Ingrese su sueldo bruto");
 	    sueldoBruto = parseInt(sueldoBruto);
 	}

 	numeroLegajo = prompt("Ingrese su numero de legajo");
 	numeroLegajo = parseInt(numeroLegajo);
 	while (numeroLegajo < 1000 || numeroLegajo > 9999) {
 		numeroLegajo = prompt("Ingrese su numero de legajo");
 	    numeroLegajo = parseInt(numeroLegajo);
 	}

 	nacionalidad = prompt("Ingrese su Nacionalidad ");
 	while (!(nacionalidad == "A" || nacionalidad == "E" || nacionalidad == "N" )) {
 		nacionalidad = prompt("Ingrese su Nacionalidad ");
 	}

 	txtIdEdad.value = edadIngresada;
 	//txtIdSexo.value = sexoIngresado;
 	//txtIdEstadoCivil.value = estadoCivilIngresado;
 	txtIdSueldo.value = sueldoBruto;
 	txtIdLegajo.value = numeroLegajo;
 	txtIdNacionalidad = nacionalidad;



}
