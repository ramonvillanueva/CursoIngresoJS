function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;

	numeroUno = prompt("Ingrese un numero");
	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese otro numero");
	numeroDos = parseInt(numeroDos);

	if (numeroUno == numeroDos) {
		alert(numeroUno + " y " + numeroDos + " Son iguales");

	}
	if (numeroUno > numeroDos) {
		resta = numeroUno - numeroDos;

		if (resta > 10) {
			alert("La resta es " + resta + " y supero el 10");
		} else {
			alert("La resta es " + resta);
		}

	} 
	if (numeroUno < numeroDos) {
		suma = numeroUno + numeroDos;

		alert("La suma es " + suma);
	}



}
