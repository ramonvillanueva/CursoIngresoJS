/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	//var resultado;
	var aumento;

	sueldo = txtIdSueldo.value;
	//resultado = txtIdResultado.value;

	sueldo = parseInt(sueldo);
	
	aumento = 1.1;

	txtIdResultado.value = sueldo * aumento; 



}
