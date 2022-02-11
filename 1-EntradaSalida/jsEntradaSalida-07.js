/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*ALEXIS RAMON CABRAL BARRIOS */

function sumar()
{
	let num1;

	let num2;

	sumar;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);

	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	sumar=num1+num2

	
	
	alert("La suma es " + sumar);	
}


function restar()
{
	let num1;

	let num2;

	restar;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);

	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	restar=num1-num2

	
	
	alert("La resta es " + restar);	
	
}

function multiplicar()
{ 
	let num1;

	let num2;

	let resultado;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);

	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado=num1*num2;

	
	alert("La multiplicacion es " + resultado);	
	
}

function dividir()
{
	let num1;

	let num2;

	let resultado;

	num1=parseInt(document.getElementById("txtIdNumeroUno").value);

	num2=parseInt(document.getElementById("txtIdNumeroDos").value);

	resultado=num1 / num2;

	
	
	alert("La division es " + resultado);	
	
}

