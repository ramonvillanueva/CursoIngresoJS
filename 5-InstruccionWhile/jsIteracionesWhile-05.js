/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado != "f" && sexoIngresado != "m"){
		sexoIngresado = prompt("ingrese f ó m .");
		break;
	}
	while(sexoIngresado == "f"){
		txtIdSexo.value = "Tu sexo es femenino";
		break;
	}
	while(sexoIngresado == "m"){
		txtIdSexo.value = "Tu sexo es masculino"
		break;
	}
	
		

	


}//FIN DE LA FUNCIÓN