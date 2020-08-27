function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdEstacion.value;
	var precioFinal;

	estadia= 15000

	switch(estacionIngresada){
		case "Invierno":{
			switch(destino){
				case "Bariloche":
				    precioFinal = estadia + (estadia * 0.2);
				    alert(precioFinal);
				    break;
				case "Mar del plata":
				    precioFinal = estadia - (estadia * 0.2);
				    alert(precioFinal);
				default: 
				 precioFinal = estadia - (estadia * 0.1);
				 alert(precioFinal);

			}
		}
		case "Verano":{
			switch(destino){
				case "Bariloche": 
				precioFinal = estadia - (estadia * 0.2);
				alert(precioFinal)
			}
		}
	}

}//FIN DE LA FUNCIÓN