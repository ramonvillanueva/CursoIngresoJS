function mostrar()
{
    //alert("ok");
    numeroIngresado = prompt("Ingrese un numero.");

    for (var contador = 2; contador < numeroIngresado; contador++) {
    	console.log(contador)
    	if (numeroIngresado % contador != 0 || numeroIngresado == 2) {
    		console.log(contador);
    		alert("Este es un numero primo");
    		break;

    	}else if (numeroIngresado % contador == 0) {
    		alert("Este numero no es primo");
    		break;
    	}
    	
    }

}//FIN DE LA FUNCIÓN