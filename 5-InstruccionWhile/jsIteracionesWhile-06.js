function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	while(contador < 5){
		
		numero= prompt("Ingrese un numero");
	    numero = parseInt(numero);

	    if (IsNaN(numero)) {
	    	continue;
	    }
	    acumulador = acumulador + numero;

	    contador++// el contador conviene ponerle al final

	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;



	
}//FIN DE LA FUNCIÓN