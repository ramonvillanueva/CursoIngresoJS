function mostrar()
{
	var continente;
	var cantidadDias;
	var precio;
	var metodoPago;
	var costo;

	precio = 100;

	continente = Marca.value;

	cantidadDias = prompt("Ingrese cantidad de dias");
	cantidadDias = parseInt(cantidadDias);
	metodoPago = prompt("Ingrese el metodo por el que pagara");

	costo = cantidadDias * precio;

	switch (continente) {
		case "América":{
			switch(metodoPago) {
				case "debito":
					precioFinal = costo - (costo * 0.7);
					break; 
				default:
					precioFinal = costo - (costo * 0.6);
					break;
				
			}
		}
		case "África":{
			switch(metodoPago) {
				case "mercado pago":
					precioFinal = costo - (costo * 0.75);
					break;
				case "efectivo":
					precioFinal = costo - (costo * 0.75);
					break;
				default:
					precioFinal = costo - (costo * 0.6);
			}
		}
		case "Europa":{
			switch(metodoPago) {
				case "debito":
					precioFinal = costo - (costo * 0.35);
					break;

				case "mercado pago":
					precioFinal = costo - (costo * 0.30);
					break;

				default:
					precioFinal = costo - (costo * 0.25);
					break;
			}
		}
		default:
			precioFinal = costo - (costo * 0.2);
			break;
	}

	alert("El precio final seria " + precioFinal);
}//Fin de la Funcion