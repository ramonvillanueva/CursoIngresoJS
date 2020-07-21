function mostrar()
{
	//tomo la edad  
	/**
	OPERADORES LOGICOS
	&& || !
	A      B    >   ||      &&     !A
	true  true     true    true    false
	true  false    true    false   false
	false true     true    false   true
	false false    false   false   true
	*/
	var edad;

	edad = txtIdEdad.value;

	//if(edad < 10 && edad > 12) tambien sirve esto se recoienda porner antes el que tenga mas posibilades de dar false

	if (edad < 18) {
		if (edad >12) {
			alert("Eres un adolescente");
		}
		
	}


}//FIN DE LA FUNCIÓN