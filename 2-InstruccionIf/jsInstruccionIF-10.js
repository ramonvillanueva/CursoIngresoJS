function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;

	numeroUno = Math.floor(Math.random() * (52 - 1) + 1);
	numeroDos = Math.floor(Math.random() * (52 - 1) + 1);
	var numeroRandomUnoAlCubo = Math.pow(numeroUno,3); // Al cubo

	console.log(numeroUno);
	console.log(numeroDos);

	if(numeroUno % 2 == 0){
		if (numeroDos % 2 == 0) { // Es par
			mensaje = numeroUno * numeroDos;
		}
	}else {
		if (numeroDos % 2 != 0) {
			alert(numeroUno - numeroDos);
		}
	}
	
	if (numeroUno % 5 == 0 ) {
		alert(numeroRandomUnoAlCubo);
	}

	


}//FIN DE LA FUNCIÓN
/** 
Calcular dos numeros random entre 1 y 51:
a-Si los dos son pares : multiplicarlos. Mostrar dato
b-Si los dos son impares restarlos. Mostrar dato
c-Si alguno es divisible por 5 elevado al cubo. Mostrar dato.
d-Si no ocurrio ningun caso anterior mostrar "No paso nada"
e-Mostrar el resultado en un solo alert.
*/