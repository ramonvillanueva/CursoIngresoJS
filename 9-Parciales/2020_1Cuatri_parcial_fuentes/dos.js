function mostrar()
{
  //alert("dos");
  var respuesta;

  respuesta = "si";

  while (respuesta == "si") {

  	do {
  		tipo = prompt("Ingrese el tipo de producto");
  	} while ( tipo != "arena" && tipo != "cal" && tipo != "cemento");

  	do {
  		cantidadBolsas = prompt("Ingrese la cantidad de bolsas");
  		cantidadBolsas = parseInt(cantidadBolsas);
  	} while (isNaN(cantidadBolsas));

  	do {
  		precio = prompt("Ingrese el precio por bolsa");
  		precio = parseInt(precio);
  	} while (precio < 1);

  	precioBruto = cantidadBolsas * precio;

  	if(cantidadBolsas > 10 && cantidadBolsas < 31) { //esto va fuera del bucle
  		precioFinal = precioBruto - (precioBruto * 0.15)
  	}else {
  		if (cantidadBolsas > 30) {
  			precioFinal = precioBruto - (precioBruto * 0.25);
  		}
  	}

  	//Punto A
  	alert("el importe bruto es " + precioBruto);




  	respuesta = prompt("Si quiere ingresar otra compra, insertar 'si' ");
  }

  
}
