
function mostrar()
{
	var contador;
	var producto;
	var precio;
	var unidades;
	var marca;
	var fabricante;
	//Punto A
	var banderaAlcohol;
	var alcoholBarato;
	var unidadesAlcoholBarato;
	var fabricanteAlcoholBarato;
	//Punto B
	var contadorBarbijo;
	var contadorAlcohol;
	var contadorJabon;
	var promedio;
	var tipoMasUnidades;
	var banderaB;
	var cantidadCompras;
	//Punto C
	var AcumuladorUnidadesJabon;

	contador = 0;

    banderaAlcohol = 0;

	banderaB = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	cantidadCompras = 0;

	AcumuladorUnidadesJabon = 0;

	while (contador < 5) {

		do {
			producto = prompt("Ingrese el producto");
			console.log("El producto que ingrese es " producto)
		} while (producto != "barbijo" && producto != "jabón" && producto != "alcohol");

		do {
			precio = prompt("Ingrese el precio");
			precio = parseInt(precio);
		} while (precio < 100 || precio > 300);

		do {
			unidades = prompt("Ingrese unidades");
			unidades = parseInt(unidades);
		} while (unidades < 1 || unidades > 1000);

		marca = prompt("Ingrese la marca");

		fabricante = prompt("Ingrese el fabricante");


		//Punto A
		while(producto = "alcohol" && banderaAlcohol < 1) {
			alcoholBarato = precio;
			unidadesAlcoholBarato = unidades;
			fabricanteAlcoholBarato = fabricante;
			banderaAlcohol++
		}
		if (producto = "alcohol" && precio < alcoholBarato) {
			alcoholBarato = precio;
			unidadesAlcoholBarato = unidades;
			fabricanteAlcoholBarato = fabricante;
		}

		//Punto B //
		if (banderaB < 1) {
			banderaB++;
			MasUnidades = unidades;
			tipoMasUnidad = producto;
		}
		if (unidades > MasUnidades) {
			MasUnidades = unidades;
			tipoMasUnidad = producto;
		}

		switch(producto) {
			case "barbijo":
			contadorBarbijo++;
			break;

			case "alcohol":
			contadorAlcohol++;
			break;

			case "jabón":
			contadorJabon++;
			AcumuladorUnidadesJabon += AcumuladorUnidadesJabon;
		}

		switch(tipoMasUnidad) {
			case "barbijo":
			cantidadCompras = contadorBarbijo;
			break;

			case "alcohol":
			cantidadCompras = contadorAlcohol;
			break;

			case "jabón":
			cantidadCompras = contadorJabon;
			break;
		}

		promedio = MasUnidades / cantidadCompras; 

		console.log("unidades de jabon "AcumuladorUnidadesJabon)
		console.log("unidad mas alta" MasUnidades)
		console.log("tipo con mas unidades " tipoMasUnidad)
		console.log( "cuantas veces compro " cantidadCompras);

		contador++;
	}

	//promedio = MasUnidades / cantidadCompras; 

	//Punto A
	alert("El alcohol mas barato costaria " + alcoholBarato + " con " + unidadesAlcoholBarato + " unidades y del fabricante " + fabricanteAlcoholBarato);

	//Punto B
	alert(tipoMasUnidad + " es el tipo con más unidades con un promedio de " + promedio);

	//Punto C
	alert("Hay en total " + AcumuladorUnidadesJabon + " unidades de jabón");
}
