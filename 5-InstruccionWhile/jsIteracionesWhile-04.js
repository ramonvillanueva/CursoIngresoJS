/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

    console.log(numeroIngresado)

	while(!(numeroIngresado >= 0 && numeroIngresado <= 9)){
		//txtIdNumero.value = "El numero ingresado es " + numeroIngresado;
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		break;
	}
	txtIdNumero.value = "El numero ingresado es " + numeroIngresado;

	
	
}//FIN DE LA FUNCIÓN