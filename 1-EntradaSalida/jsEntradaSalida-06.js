/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

/*ALEXIS RAMON CABRAL BARRIOS */
/*EJERCICIO 6 */

function sumar()
{
	let num1;

	let num2;

	let numeroparciado1;

	let numeroparciado2;

	let resultadoparceado;

	num1=document.getElementById("txtIdNumeroUno").value;

	num2=document.getElementById("txtIdNumeroDos").value;

	numeroparciado1=parseInt(num1);

	numeroparciado2=parseInt(num2);

	resultadoparciado="la suma es de " + (numeroparciado1+numeroparciado2);



	alert(resultadoparciado)
}

