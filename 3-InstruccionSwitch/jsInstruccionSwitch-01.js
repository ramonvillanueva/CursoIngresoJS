function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);
	console.log(mesDelAño);

	switch(mesDelAño){
		case "Enero":{  //Las {} en case son opcionales
			alert("que comiences bien el año");
			break;
		}
		case "Marzo":{
			alert("a clases!");
			break;
		}
		case "Julio":{
			alert("Se vienen las vaciones!");
			break;
		}
		case "Diciembre":{
			alert("Felices fiestas!");
			break;
		}
	}



}//FIN DE LA FUNCIÓN