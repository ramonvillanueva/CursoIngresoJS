/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	var numero;

	while(respuesta == 'si' ) {

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		

       while(isNaN(numero)) {
			numero = prompt("Ingrese un numero");
		    numero = parseInt(numero);
		    //continue;
		}

		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("¿Desea continuar?");
	}




	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN