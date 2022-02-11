/* ALEXIS RAMON CABRAL BARRIOS*/

function mostrar()
 {
	//tomo la edad  

	let edad;
	let estadoCivil;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil=document.getElementById("estadoCivil").value;

	
	if(edad >= 18 && estadoCivil == "Soltero"){

		alert("Es soltero y no es menor ");

    }
}	

	/*
{
	const A=10
	const B=20
	const C=20

	if(A<=B && B <= C){
		alert("EL MENOR ES A")}
	else if(B<=C && B <= A){
		alert("eL MENOR ES B")}
	else{
		alert("El menor es C")

     }



}*/