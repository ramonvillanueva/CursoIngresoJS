function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var max;
	var min;

	max = 11;// el maximo no esta incluido
	min = 1;// el minimo si se incluye

	numeroRandom = Math.floor(Math.random() * (max - min) + min);

    alert(numeroRandom);
   //console.log(numeroRandom)

}//FIN DE LA FUNCIÓN