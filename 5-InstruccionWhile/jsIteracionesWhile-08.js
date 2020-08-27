/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	var numero;

	while(respuesta == 'si' ) {

		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		

       while(isNaN(numero)) {
			numero = prompt("Ingrese un numero");
		    numero = parseInt(numero);
		}

		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("¿Desea continuar?");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN