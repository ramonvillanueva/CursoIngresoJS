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
				    precioFinal = estadia + ( estadia + 0.2);
				    alert(precioFinal);
				    break;


			}
		}
	}

}//FIN DE LA FUNCIÓN