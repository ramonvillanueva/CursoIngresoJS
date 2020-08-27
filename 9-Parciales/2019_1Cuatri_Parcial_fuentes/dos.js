function mostrar()
{
	var nombreUno;
	var nombreDos;
	var pesoUno;
	var pesoDos;
	var pesoTotal;
	var promedio;

	nombreUno = prompt("Ingrese el nombre de uno de ustedes");
	pesoUno = prompt("Ingrese su peso");
	pesoUno = parseFloat(pesoUno);

	nombreDos = prompt("Ingrese el nombre de la otra persona");
    pesoDos = prompt("Ingrese el peso");
    pesoDos = parseFloat(pesoDos);

    pesoTotal = pesoUno + pesoDos;

    promedio = pesoTotal / 2;

    alert("Ustedes se llaman " + nombreUno + " y " + nombreDos + ", pesan " + pesoUno + " y "+ pesoDos + " kilos, que sumados son " + pesoTotal + " kilos y el promedio de peso es " + promedio);
}
