function mostrar()
{
	//tomo la edad  
	var edad;
	var estado;
	
	estado = estadoCivil.value;
	edad = txtIdEdad.value;

	if(edad < 18 && estado != "Soltero") {
		alert("Es muy pequeño para NO ser soltero");
	}

}//FIN DE LA FUNCIÓN