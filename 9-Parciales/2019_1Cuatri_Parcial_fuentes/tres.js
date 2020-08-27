function mostrar()
{
	var precio;
	var descuento;

	precio = prompt("Ingrese el precio");
	precio = parseFloat(precio);

	descuento = prompt("Ingrese el porcentaje del descuento");
	descuento = parseFloat(descuento);

	precioFinal = (precio * descuento) / 100;

	elPrecioFinal.value = precioFinal;
}
