function mostrar()
{
	//tomo la edad  */

	let estadoCivil;
	let edad;
	
	edad=parseInt(document.getElementById("txtIdEdad").value);
    estadoCivil=document.getElementById("estadoCivil").value;

	if(edad <= 18 && estadoCivil != "Soltero"){

		alert( "Es muy ,pequño para no ser soltero")


	}

	


}//FIN DE LA FUNCIÓN