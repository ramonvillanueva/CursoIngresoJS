/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;
	//OPERADOR DE CONCATENACION => +
	//OPERADORES ARITMETICOS: + - * / % 

	alert("Usted se llama " + nombre + " y tiene " + edad + " años");

}

