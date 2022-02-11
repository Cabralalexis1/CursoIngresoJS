/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/


/*ALEXIS RAMON CABRAL BARRIOS*/

function mostrarAumento()
{
	let importeSueldo;

	let descuento;

	let resultado;

	importeSueldo=parseInt(document.getElementById("txtIdImporte").value);

	descuento=1.25

    resultado=importeSueldo / descuento;

	document.getElementById("txtIdResultado").value=resultado.toFixed(2);



}
/*Ejercicio 10Biz 1 */
function mostrarAumento()
{
	let importeSueldo;
	let porcentajeDescuento;
	let descuento;
	let resultado;

	importeSueldo=parseInt(document.getElementById("txtIdImporte").value);
	porcentajeDescuento=parseInt(prompt(" por favor ingrese valor del descuento "));
	
    descuento=importeSueldo * porcentajeDescuento / 100;

	resultado=importeSueldo - descuento;


	document.getElementById("txtIdResultado").value=resultado.toFixed(2);



}

/*Ejercicio 10Biz 2*/

function mostrarAumento()
{
	let producto;
	let precio;
	let porcentajeDescuento;
	let descuento;
	let importeFinal;
	let resultado;

	producto=prompt(" ingrese el producto ");
	precio=parseInt(prompt("ingrese el precio de " + producto)); 
	porcentajeDescuento=parseInt(prompt(" ingrese el porcentaje de descuento "));

	descuento= precio * porcentajeDescuento / 100;

	importeFinal= precio - descuento

	document.getElementById("txtIdResultado").value=importeFinal;

	resultado=" Usted compro una " + producto + " con " + porcentajeDescuento + " % de descuento, el precio final es" +
	importeFinal;

	alert(resultado);




}
