/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var cantidadAlambre;
	var perimetro;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	perimetro = ancho * 2 + largo * 2;

	cantidadAlambre = perimetro * 3;

	alert("La cantidad de alambre necesaria es " + cantidadAlambre + " metros");

}
function Circulo () 
{
	var radio;
	var perimetro;
	var totalAlambre;

	radio = txtIdRadio.value;

	radio = parseFloat(radio); // ParseFloat para que se parseen decimales

	perimetro = 2 * Math.PI * radio; // Math.PI es Pi

	perimetro = (Math.round(perimetro));// para redondear

	totalAlambre = perimetro * 3;

	alert("La cantida de alambre necesaria es " + totalAlambre)
}
function Materiales () 
{
	var largo;
	var ancho;
	var cemento;
	var cal;
	var area;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseFloat(largo);
	ancho = parseFloat(ancho);

	area = largo * ancho;

	cemento = area * 2;

	cal = area * 3;

	alert("Se nesecita " + cemento + " bolsas de cemento y " + cal + " de cal");




}