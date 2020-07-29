/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	var cantidad;
	var precio;

	cantidad = txtIdCantidad.value;
	empresa = Marca.value;
	precioFinal = txtIdprecioDescuento.value;

	cantidad = parseInt(cantidad);
	precioFinal = parseFloat(precioFinal);

	

	precio = cantidad * 35;

	if (cantidad >= 6) { //A
		precioFinal = precio - (precio * 0.5);

	}else if (cantidad == 5 && empresa == "ArgentinaLuz") { //B
		precioFinal = precio - (precio * 0.4);

	}else if (cantidad == 5 && empresa != "ArgentinaLuz") {
		precioFinal = precio - (precio * 0.3);

	}else if (cantidad == 4 && empresa == "ArgentinaLuz" || empresa == "FelipeLamparas") { //C
		precioFinal = precio - (precio * 0.25);

	}else if (cantidad == 4 && empresa != "ArgentinaLuz" || empresa != "FelipeLamparas") {
		precioFinal = precio - (precio * 0.2);

	}else if (cantidad == 3 && empresa == "ArgentinaLuz") { //D
		precioFinal = precio - (precio * 0.15);

	}else if (cantidad == 3 && empresa == "FelipeLamparas") {
		precioFinal = precio - (precio * 0.1);	
	}
	else if (cantidad == 3 && empresa != "ArgentinaLuz" && empresa != "FelipeLamparas") {
		precioFinal = precio - (precio * 0.05);
	}

	if (precioFinal > 120) {

		impuesto = precio * 0.1;

		alert("Usted pagó " + impuesto + " de IIBB ");
	}


    console.log(precioFinal)


}
// shift alt f para acomodar / esto no funciona