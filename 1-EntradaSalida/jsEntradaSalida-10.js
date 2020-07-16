/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	//var resultado; tambien se puede hacer asi 
	var descuento;

	importe = txtIdImporte.value;

	importe = parseInt(importe);

	descuento = importe * 0.25;

	txtIdResultado.value = importe - descuento;

	//resultado = importe - descuento; tambien se puede hacer asi

	//txtIdResultado.value = resultado; tambien se puede hacer asi


}
