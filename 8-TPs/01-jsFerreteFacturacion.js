/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	resultado =  precioUno + precioDos + precioTres;

	alert("La suma es " + resultado );
}
function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	//var suma
	var resultado;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//suma = precioUno + precioDos + precioTres;

	//resultado = suma / 3;

	resultado = (precioUno + precioDos + precioTres) / 3; // forma de hacerlo rapido pero de la otra forma esta bien tambien

	alert("El promedio es " + resultado );


}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var suma;
	//var aumento;
	var resultado;

	//aumento = 1.21;

	precioUno = txtIdPrecioUno.value;
	precioDos = txtIdPrecioDos.value;
	precioTres = txtIdPrecioTres.value;

	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//suma = precioUno + precioDos + precioTres;

	//resultado = suma * aumento;

	resultado = (precioUno + precioDos + precioTres) * 1.21;// asi es mas corto, pero el resto tambien esta bien

	alert("El precio final es de " + resultado );
}