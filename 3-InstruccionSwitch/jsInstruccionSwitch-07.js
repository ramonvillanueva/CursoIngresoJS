function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	

	switch(destinoIngresado){
		case "Bariloche":
		    alert("Se encuentra al oeste de la Argentina");
		    break;
		case "Cataratas":
		    alert("Se encuentra al norte de la Argentina ");
		    break;
		case "Mar del plata":
		    alert("Se encuentra al este de la Argentina");
		    break;
		case "Ushuaia": 
		     alert("Se encuantra al sur de la Argentina");
		     break;
	}

}//FIN DE LA FUNCIÓN