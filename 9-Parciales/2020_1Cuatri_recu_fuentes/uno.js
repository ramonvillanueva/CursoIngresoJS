
function mostrar()
{
	var contador;
	var producto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
    //Ejericio A
   	var precioCaro = 99;
    //Ejercicio B
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	//Ejercicio C



	contador = 0;

	while (contador < 5) {
		
		producto = prompt("Ingrese el producto");
		while (producto != "barbijo" && producto != "jabon" && producto != "alcohol") {
			producto = prompt("Error, vuelva a ingresar el producto");
		}

		precio = prompt("Ingrese el precio");
		precio = parseInt(precio);
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = prompt("Error.Ingrese el precio de nuevo");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("Ingrese la cantidad de unidades");
		cantidadUnidades = parseInt(cantidadUnidades);
		while(cantidadUnidades < 1 || cantidadUnidades > 1000 || isNaN(cantidadUnidades)) {
			cantidadUnidades = prompt("Error. Ingrese la undades de nuevo");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("Ingrese la marca"); // hacer do while en marca y fabricante

		fabricante = prompt("Ingrese al fabricante");

		// Ejercicio A
		if (producto == "jabon" && precio > precioCaro) {
			precioCaro = precio;
			UnidadesCaro = cantidadUnidades;
			fabricanteCaro = fabricante;
		}

		//Ejercicio B
		switch(producto){// cambiar esto a acumulador += unidades
			case "barbijo":
				acumuladorBarbijo += cantidadUnidades;
				contadorBarbijo++
				break;

			case "jabon":
				acumuladorJabon += cantidadUnidades;
				contadorJabon++
				break;

			case "alcohol":
				acumuladorAlcohol += cantidadUnidades;
				contadorAlcohol++
				break;
		}

		contador++
	}	
    //Ejercicio B
	if (contadorBarbijo > contadorJabon) {
		if (contadorBarbijo > contadorAlcohol) {
			productoMayor = "Barbijo";
		}
	}
	if (contadorJabon > contadorBarbijo) {
		if (contadorJabon > contadorAlcohol) {
			productoMayor = "Jabón";
		}
	}
	if (contadorAlcohol > contadorJabon) {
		if (contadorAlcohol > contadorBarbijo) {
			productoMayor = "Alcohol";
		}
	}

	alert("El jabón mán caro costo " + precioCaro + " , con " + UnidadesCaro + " unidades y del fabricante " + fabricanteCaro);

	alert("El tipo de producto con más conpras es " + productoMayor );

	
}