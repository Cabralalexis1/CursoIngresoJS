/*ALEXIS RAMON CABRAL BARIOS*/
/* EJERCICIO 1*/
/*comentarios
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/

function mostrar()
{
	let producto1;
	let producto2;
	let producto3;

	let precio1;
	let precio2;
	let precio3;

	let iva;
	let precioBruto;
	let promedio;
	let precioFinal;
	let descuento;
	let precioFinalConDescuento;

	producto1=prompt("ingrese el producto1");
	producto2=prompt("ingrese segundo producto");
	producto3=prompt("ingrese el tercer producto");

	precio1=prompt("ingrese el precio de "+producto1);
	precio2=prompt("ingrese el precio de "+producto2);
	precio3=prompt("ingrese el precio de"+producto3);

	descuento=prompt("ingrese el descuento");

	precio1=parseFloat(precio1);
	precio2=parseFloat(precio2);
	precio3=parseFloat(precio3);

	descuento=parseFloat(descuento);

	iva=1.21


	precioBruto= precio1+ precio2+ precio3;
	promedio= precioBruto / 3;
	precioFinal=precioBruto * iva;
	descuento=precioFinal * descuento / 100;
	precioFinalConDescuento=precioFinal - descuento;

	alert("El precio bruto es "+ precioBruto+" El precio promedio es "+ promedio.toFixed(2)+ " El precio final es " +precioFinal +" El precio con descuento es "+precioFinalConDescuento.toFixed(2));
	

}
