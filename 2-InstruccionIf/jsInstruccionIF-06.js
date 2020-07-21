function mostrar()
{
	//tomo la edad  
	var edad;

	edad = txtIdEdad.value;

	if (edad > 17) {
		alert("Eres mayor de edad");
	}else {// va ser siempre menor de 18
		if (edad > 12) {
			alert("Eres un adolescente");
		}else {
			alert("Eres un niño");
		}
		
	}



}//FIN DE LA FUNCIÓN