/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/


/*Alexis Ramon cabral Barrios */
/*ejercicio numero 5 */



function mostrar()
{
    /*genera dos variables para nombre y edad */
	
	let nombre;

	let edad;

	mostrar;


	/*Se asigna el valor ingreado en el documento a cada variable */

	nombre=document.getElementById("txtIdNombre").value;

	edad=document.getElementById("txtIdEdad").value;


	/*Literales de cadena sumado a  los valores de cada variable*/

	mostrar=("usted se llama " + nombre + " y tiene " + edad + " años");

	alert(mostrar) 
 }

    /*Ejercicio N5 BIZ*/
	/*Alexis Ramon cabral Barrios */
	


function mostrar()
{
	let nombre;
	let edad;

	nombre=document.getElementById("txtIdNombre").value;
	edad=document.getElementById("txtIdEdad").value;

	alert(" Perez usted se llama "+ nombre + " y tiene " + edad + " años");



}



