function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;

	horaDelDia = parseInt(horaDelDia);

	console.log(horaDelDia);
	
	switch(horaDelDia){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		    alert("Es de mañana");
	}
	
	



}//FIN DE LA FUNCIÓN